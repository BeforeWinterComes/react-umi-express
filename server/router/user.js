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

module.exports = router;
