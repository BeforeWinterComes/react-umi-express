export const proxy: Record<string, any> = {
  dev: {
    "/demo": {
      target: "http://localhost:3008/",
      changeOrigin: true,
      pathRewrite: { "^/demo": "" },
    },
  },
};
