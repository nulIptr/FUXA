
import { throwError as observableThrowError, Observable, of } from 'rxjs';
import { Injectable } from "@angular/core";
import { ConnectionBackend, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers } from "@angular/http";
import { appConfig } from '../app.config';
import { catchError } from 'rxjs/operators';




@Injectable()
export class CustomHttp extends Http {
    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
        super(backend, defaultOptions);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<any> {
        // return super.get(appConfig.apiUrl + url).catch(this.handleError);
        return super.get(appConfig.apiUrl + url, this.addJwt(options)).pipe(catchError((error) => {
            return of(error._body);
        }));

    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<any> {
        // return super.post(appConfig.apiUrl + url, body).catch(this.handleError);
        return super.post(appConfig.apiUrl + url, body, this.addJwt(options)).pipe(catchError((error) => {
            return of(error._body);
        }));
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<any> {
        return super.put(appConfig.apiUrl + url, body, this.addJwt(options)).pipe(catchError((error) => {
            return of(error._body);
        }));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<any> {
        return super.delete(appConfig.apiUrl + url, this.addJwt(options)).pipe(catchError((error) => {
            return of(error._body);
        }));
    }

    // private helper methods

    private addJwt(options?: RequestOptionsArgs): RequestOptionsArgs {
        // ensure request options and headers are not null
        options = options || new RequestOptions();
        options.headers = options.headers || new Headers();

        // add authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            options.headers.append('Authorization', 'Bearer ' + currentUser.token);
        }

        return options;
    }

    private handleError(error: any) {
        if (error.status === 401) {
            // 401 unauthorized response so log user out of client
            window.location.href = '/login';
        }

        return observableThrowError(error._body);
    }
}

export function customHttpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions): Http {
    return new CustomHttp(xhrBackend, requestOptions);
}

export let customHttpProvider = {
    provide: Http,
    useFactory: customHttpFactory,
    deps: [XHRBackend, RequestOptions]
};