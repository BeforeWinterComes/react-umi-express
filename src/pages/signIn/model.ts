import { signup, login } from "@/api/user";
import { useReducer } from "react";

export const initialState = {};

export const reducer = (state: any, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case "update":
      return { ...state, ...payload };
    default:
      throw new Error();
  }
};

// 注册
const signupHandle = async (params: RequestParams) => {
  const res = await signup(params);
  return res;
};

// 登录
const loginHandle = async (params: RequestParams) => {
  const res = await login(params);
  return res;
};

export { signupHandle, loginHandle };
