import { $axios } from "@/utils/axios";
import { API } from "./api";

// 注册
export async function signup(params?: RequestParams) {
  return $axios.request({
    url: API.SIGN_UP,
    method: "POST",
    params,
  });
}
