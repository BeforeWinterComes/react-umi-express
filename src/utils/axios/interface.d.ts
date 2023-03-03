import type { AxiosRequestConfig } from "axios";

export interface CreateAxiosConfig extends AxiosRequestConfig {
  /**
   * 是否获取response headers
   */
  getHeaders?: boolean;

  /**
   * 当接口返回错误时是否自定义处理错误
   *
   * 默认统一处理，接口将不会返回response
   */
  handError?: boolean;

  /**
   * 定义当前接口是否是平台接口
   * 因为平台系统跟制题系统接口的返回格式不统一
   */
  isPlatform?: boolean;

  /**
   * 定义请求参数是否为FormData格式
   */
  isFormData?: boolean;

  /**
   * 是否屏蔽错误消息
   */
  hiddenErrorMessage?: boolean;

  /**
   * 是否隐藏loading
   */
  disableLoading?: boolean;
}
