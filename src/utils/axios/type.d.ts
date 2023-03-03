declare type ResponseResult<T = any> = {
  code: number;
  msg?: string;
  data?: T;
};

declare type RequestParams = RecordItem;

declare type UploadFileParams = {
  // 上传文件参数接口字段名
  name?: string;

  // 文件
  file: File | Blob;

  // 文件名
  filename?: string;

  data?: RecordItem;
};
