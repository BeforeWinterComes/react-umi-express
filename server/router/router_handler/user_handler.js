// 导入数据库操作模块
const db = require("../../db");
// 加密插件
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secretKey = "itheima No1 ^_^";

// 注册
exports.regUser = (req, res) => {
  const userinfo = req.body;
  console.log(userinfo, "userIndo");
  // 定义sql语句， 查询是否被占用

  const sqlStr = "select * from user_info where username=?";
  db.query(sqlStr, [userinfo.username], (err, results) => {
    if (err) return res.errHandle(err, 2);

    if (results.length > 0) {
      return res.errHandle("用户名已被占用， 请更换其他用户名", 500);
    }
    // 对密码进行加密
    // userinfo.password = bcrypt.hashSync(userinfo.password, 10); // 暂时放开 有助于调试

    // 定义插入新用户的sql语句
    const sql = "insert into user_info set ?";
    db.query(
      sql,
      {
        username: userinfo.username,
        password: userinfo.password,
        phone: userinfo.phone,
      },
      (err, results) => {
        console.log("results", results);
        if (err) {
          return res.errHandle(err, 3);
        }
        // 判断影响行数是否为1
        if (results.affectedRows !== 1)
          return res.errHandle("注册用户失败， 请稍后再试", 500);
        // success
        res.errHandle("注册成功", 200);
      }
    );
  });
};

//登录
exports.login = (req, res) => {
  const { username, password } = req.body;
  let sqlStr = "select * from user_info where username=? and password=?";
  db.query(sqlStr, [username, password], (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      // 登录成功后，调用jwt.sign()方法生成jwt字符串。并通过token属性发送给客户端
      // 参数1： 用户的信息对象
      // 参数2： 加密的秘钥
      // 参数3： 配置对象，可配置当前 token有效期
      const tokenStr = jwt.sign({ username: req.body.username }, secretKey, {
        expiresIn: "10s",
      });
      res.send({
        code: 200,
        msg: "登录成功!",
        token: tokenStr,
      });
    } else {
      res.send({
        code: 500,
        msg: "登录失败",
      });
    }
  });
};
