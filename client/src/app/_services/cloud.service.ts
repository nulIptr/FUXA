import { SFSInnerParam, JsonReturnInfo, WebBrowserCustomEventArgs } from '../_models/SFSDefault';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utils } from '../_helpers/utils';

@Injectable()
class CloudService {

    private static callBackList: { [index: string]: Function; } = {};
    constructor(private http: HttpClient) {
        (window as any).handleBusinessPluginCustomEventCallBack = (args: any[]) => {
            if (args && CloudService.callBackList[args[0]]) {
                CloudService.callBackList[args[0]](args.slice(1))
            }
        }
    }

    invokeCloudService<TParam extends SFSInnerParam, TResult>(param: TParam): Observable<JsonReturnInfo<TResult>> {
        if (param.ApiDescription) {
            param.ApiDescription = param.ApiDescription.toString() + ';ReturnValueIgnoreNull';
        } else {
            param.ApiDescription = ';ReturnValueIgnoreNull';
        }
        param.RequestId = Utils.getGUID();
        let index = location.pathname.toLowerCase().indexOf('independentctrls');
        let pathPerFix = '/';
        if (index !== -1) {
            pathPerFix = location.pathname.substr(0, index);
        }
        return this.http.post<JsonReturnInfo<TResult>>(pathPerFix
            + 'Kingdee.K3.MFG.WebApi.ServicesStub.SFCWebApiService.Execute,Kingdee.K3.MFG.WebApi.ServicesStub.common.kdsvc', {
            params: {
                parameters: this.ToArrayString(param)
            },
            headers: { 'Content-Type': 'application/json' }
        })
    };
    ToArrayString(value: object): string {
        return JSON.stringify([value]);
    }
    fireBusinessPluginCustomEvent(eventName: String, parameters?: any, callBack?: Function) {
        let win = window as any;
        let formProxy = win.KDFormProxy;
        let key = win.KDIFrameKey;

        let callBackName = 'func' + Date.now();
        this.registFunctionForCallBack(callBackName, callBack)
        let args = new WebBrowserCustomEventArgs(parameters, callBackName)
        formProxy.fireCustomEvents.call(formProxy, key, eventName, JSON.stringify(args));
    };

    fireBusinessPluginCustomEventWithCallBack(eventName: String, parameters?: any, callBackName?: string) {
        let win = window as any;
        let formProxy = win.KDFormProxy;
        let key = win.KDIFrameKey;

        let args = new WebBrowserCustomEventArgs(parameters, callBackName)
        formProxy.fireCustomEvents.call(formProxy, key, eventName, JSON.stringify(args));

    };

    registFunctionForCallBack(funcName: string, func: Function) {
        CloudService.callBackList[funcName] = func;
    }

}
