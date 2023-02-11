const express = require("express");
const cors = require("cors");
const userRouter = require("./router/user");

// 创建express的服务器实例
const app = express();
app.use(cors());

app.use("/api", userRouter);

app.listen(3008, () => {
  console.log("api server running at http://localhost:3008");
});
