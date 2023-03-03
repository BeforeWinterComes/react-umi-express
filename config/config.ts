import { defineConfig } from "umi";
import { routes } from "./router";

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
  cssLoader: {
    localsConvention: "camelCase",
  },
  lessLoader: {
    modifyVars: {
      hack: `true; @import "~@/mixin.less";`,
    },
  },
  define: {
    "process.env.API_PREFIX": API_PREFIX,
  },
});
