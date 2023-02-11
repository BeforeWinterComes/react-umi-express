const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/login", (req, res) => {
  const sql = "select * from user_info where name=?";
  db.query(sql, "张经典", (err, result) => {
    console.log("result", result);
    res.send(result);
  });
});
router.post("/signup", (req, res) => {
  const { name, address } = req.body;
  const sql = "insert into user_info set ?";
  db.query(sql, { name: name, address: address }, (err, results) => {
    if (err) {
      return res.errHandle(err, 3);
    }
    // 判断影响行数是否为1
    if (results.affectedRows !== 1)
      return res.errHandle("注册用户失败， 请稍后再试", 4);
    // success
    // res.send({ status: 0, message: 'success' })
    res.errHandle("注册成功", 0);
  });
});

module.exports = router;
