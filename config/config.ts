import { defineConfig } from "umi";
import { routes } from "./router";

export default defineConfig({
  routes,
  npmClient: "yarn",
  plugins: ["@umijs/plugins/dist/antd"],
  antd: {},
});
