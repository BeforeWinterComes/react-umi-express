const express = require("express");
const cors = require("cors");
const userRouter = require("./router/user");
const bodyParser = require("body-parser");
const { expressjwt } = require("express-jwt");
const secretKey = "itheima No1 ^_^";

// 创建express的服务器实例
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 注册将jwt字符串解析还原成 json对象的中间件
// 只要配置了这个中间件  就可以吧解析出来的用户信息，放到req.user里
app.use(
  expressjwt({ secret: secretKey, algorithms: ["HS256"] }).unless({
    path: [/^\/api\//],
  })
);

// 在路由之前封装统一的错误处理函数
app.use((req, res, next) => {
  // status 默认是1
  // err可能是一个错误构造函数的实例对象， 也可能是一个字符串
  res.errHandle = function (err, status = 1) {
    res.send({
      code: status,
      msg: err instanceof Error ? err.message : err,
    });
  };
  next();
});

app.use("/api", userRouter);

app.listen(3008, () => {
  console.log("api server running at http://localhost:3008");
});
