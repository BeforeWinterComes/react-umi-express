const express = require("express");
const router = express.Router();
const db = require("../db");
const userHandle = require("./router_handler/user_handler");

// 导入表单验证中间件
const expressJoi = require("@escook/express-joi");
// 导入需要的验证规则对象
const { reg_login_schema } = require("../schema/user");

router.get("/", (req, res) => {
  res.send("Hello World!");
});

// 注册接口
router.post("/signup", expressJoi(reg_login_schema), userHandle.regUser);

module.exports = router;
