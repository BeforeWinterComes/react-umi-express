export default {
  proxy: {
    "/demo/": {
      target: "http://localhost:3008",
      changeOrigin: true,
      pathRewrite: { "^/demo": "/demo" },
    },
  },
};
