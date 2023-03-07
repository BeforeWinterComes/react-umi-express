import axios from "axios";
import type { AxiosInstance, AxiosResponse } from "axios";
import type { CreateAxiosConfig } from "./interface";
import { ContentType } from "./enum";
import { defaultConfig } from "./config";
import { message } from "antd";
import { cloneDeep } from "lodash-es";
import { getUserInfo, transformFormData } from "../utils";
import qs from "qs";
import { history } from "umi";

const errorResult: string = "__ERROR_RESULT__";
const errorResult401: string = "__ERROR_RESULT__401__";

export class Axios {
  private instance: AxiosInstance;
  constructor(options: CreateAxiosConfig) {
    this.instance = axios.create(options);
    this.setHeaders();
  }
  /**
   * 指定post请求方式的content-type
   */
  private setHeaders() {
    this.instance.defaults.headers.post["Content-Type"] =
      ContentType.FORM_URLENCODED;
  }

  static transformResponse(res: ResponseResult, conf: CreateAxiosConfig): any {
    const { msg, code } = res;
    if (code === 401) {
      Promise.reject(defaultConfig[401]);
      message.error(defaultConfig[401]);
      return errorResult401;
    }

    if (code !== 200) {
      !conf.hiddenErrorMessage && message.error(msg || defaultConfig.other);
      return errorResult;
    }

    // 平台接口返回格式没有包裹一层data(此处可以根据不同组的代码逻辑统一返回数据类型)
    return res;
  }

  static transformRequest(config: CreateAxiosConfig): CreateAxiosConfig {
    const conf: CreateAxiosConfig = cloneDeep(config);
    const userInfo = getUserInfo() || {};
    conf.params = { ...userInfo, ...(conf.params || {}) };

    if (conf.method?.toLocaleUpperCase() === "POST") {
      if (conf.isFormData) {
        conf.data = transformFormData(conf.params);
      } else {
        conf.data = qs.stringify(conf.params);
      }

      conf.params = null;
    }

    // !conf.disableLoading && showLoading(conf.url as string);
    return conf;
  }

  public request<T = any>(config: CreateAxiosConfig): Promise<T> {
    const conf = Axios.transformRequest(config);
    return new Promise((resolve) => {
      this.instance
        .request(conf)
        .then((res: AxiosResponse<ResponseResult>) => {
          // !conf.disableLoading && clearLoading(conf.url as string);
          const { data, headers } = res;
          const ret: any = Axios.transformResponse(data, conf);
          if (ret === errorResult401) {
            history.push("/");
            return;
          }
          if (conf.handError) {
            resolve(data as unknown as Promise<T>);
          } else if (ret !== errorResult) {
            const retData: any = ret;

            // 如果需要返回http headers
            if (conf.getHeaders) {
              retData.headers = headers;
            }
            resolve(retData as unknown as Promise<T>);
          }
        })
        .catch((e: Error) => {
          // !conf.disableLoading && clearLoading(conf.url as string);
          message.error(`系统开小差了(${e.message})，请刷新后重试或联系管理员`);
          // reject(e);
        });
    });
  }
  public upload<T = any>(url: string, params: UploadFileParams): Promise<T> {
    const formData = new window.FormData();

    if (params.data) {
      Object.keys(params.data).forEach((key) => {
        formData.append(key, params.data?.[key]);
      });
    }

    formData.append(params.name || "file", params.file, params.filename);

    return this.instance.post(url, formData, {
      headers: {
        "Content-Type": ContentType.FORM_DATA,
      },
    });
  }
}

export const $axios = new Axios({
  baseURL: process.env.API_PREFIX,
  responseType: "json",
});
