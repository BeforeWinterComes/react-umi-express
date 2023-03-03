// 导入数据库操作模块
const db = require("../../db");
// 加密插件
const bcrypt = require("bcryptjs");
// 注册
exports.regUser = (req, res) => {
  const userinfo = req.body;
  // 定义sql语句， 查询是否被占用

  const sqlStr = "select * from user_info where username=?";
  db.query(sqlStr, [userinfo.username], (err, results) => {
    if (err) return res.errHandle(err, 2);

    if (results.length > 0) {
      return res.errHandle("用户名已被占用， 请更换其他用户名", 3);
    }
    // 对密码进行加密
    // userinfo.password = bcrypt.hashSync(userinfo.password, 10); // 暂时放开 有助于调试

    // 定义插入新用户的sql语句
    const sql = "insert into user_info set ?";
    db.query(
      sql,
      { username: userinfo.username, password: userinfo.password },
      (err, results) => {
        if (err) {
          return res.errHandle(err, 3);
        }
        // 判断影响行数是否为1
        if (results.affectedRows !== 1)
          return res.errHandle("注册用户失败， 请稍后再试", 4);
        // success
        res.errHandle("注册成功", 0);
      }
    );
  });
};

//登录
exports.login = (req, res) => {
  res.send("登录成功");
};
