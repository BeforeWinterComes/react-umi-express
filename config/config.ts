import { defineConfig } from "umi";
import { routes } from "./router";
import { proxy } from "./proxy";

const API_PREFIX = "/demo";

export default defineConfig({
  routes,
  npmClient: "yarn",
  plugins: ["@umijs/plugins/dist/antd"],
  antd: {},
  title: "react-express-umi",
  hash: true,
  ignoreMomentLocale: true,
  inlineLimit: 4000,
  cssLoader: {},
  lessLoader: {
    modifyVars: {
      hack: `true; @import "~@/mixin.less";`,
    },
  },
  proxy: proxy["dev"],
  define: {
    "process.env.API_PREFIX": API_PREFIX,
  },
});
