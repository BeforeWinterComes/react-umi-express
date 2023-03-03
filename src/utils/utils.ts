import Cookies from "js-cookie";

/**
 * 获取本地存储中的用户信息
 */
export const getUserInfo = <T extends RecordItem>(): T | null => {
  const userInfo = Cookies.get("cp-userInfo");
  return userInfo ? JSON.parse(userInfo) : null;
};

export function transformFormData<T extends RecordItem>(param: T) {
  const fd = new FormData();
  Object.keys(param).forEach((key) => {
    fd.append(key, param[key]);
  });
  return fd;
}
