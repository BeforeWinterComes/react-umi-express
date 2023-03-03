const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "zhang776366255",
  database: "demo",
});

module.exports = db;
