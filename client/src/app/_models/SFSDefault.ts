export class SFSDefaultResult {
  ExtendResult1?: string;
  ExtendResult2?: string;
  ExtendResult3?: string;
  ExtendResult4?: string;
  ExtendResult5?: string;
  ExtendResult6?: string;
  ExtendResult7?: string;
  ExtendResult8?: string;
  ExtendResult9?: string;
  ExtendResult10?: string;
}

export class SFSInnerParam {
  /// <summary>
  /// 请求ID
  /// </summary>
  RequestId: string;

  /// <summary>
  /// 用户Token
  /// </summary>
  UserToken: string;

  /// <summary>
  /// 接口名称
  /// </summary>
  ApiName: string;

  /// <summary>
  /// 接口描述
  /// </summary>
  ApiDescription: string;

  ToArray(): any[] {
    let r: any[] = [this];
    return r;
  }
}

export class JsonReturnInfo<T extends SFSDefaultResult> {
    /// <summary>
    /// 是否成功
    /// </summary>
  IsSuccess: boolean;

    /// <summary>
    /// 提示信息
    /// </summary>
  Message: string;

    /// <summary>
    /// 返回值
    /// </summary>
  ReturnListValues: T[];
}

export class JsonParamInfo<T> {
    /// <summary>
    /// 请求ID
    /// </summary>
  RequestId: string;

    /// <summary>
    /// 用户Token
    /// </summary>
  UserToken: string;

    /// <summary>
    /// 接口名称
    /// </summary>
  ApiName: string;

    /// <summary>
    /// 接口描述
    /// </summary>
  ApiDescription: string;

    /// <summary>
    /// 参数值
    /// </summary>
  ParamValue: T;

  ToArray(): any[] {
    let r: any[] = [this];
    return r;
  }
}

export class WebBrowserCustomEventArgs {
  ArgsValue: string;
  CallBack: string;
  constructor(argsValue: string, callBack: string) {
    this.ArgsValue = argsValue;
    this.CallBack = callBack;
  }
}
