const joi = require("joi");

/**
 * string() 值必须是字符串
 * alphanum() 值只能是包含 a-zA-Z0-9 的字符串
 * min(length) 最小长度
 * max(length) 最大长度
 * required() 值是必填项，不能为 undefined
 * pattern(正则表达式) 值必须符合正则表达式的规则
 */

// 用户名的验证规则
const username = joi.string().alphanum().min(6).max(20).required();

// 密码的验证规则
const password = joi
  .string()
  .pattern(/^[\S]{6,20}$/)
  .required();

const phone = joi.string();

exports.reg_login_schema = {
  body: {
    username,
    password,
    phone,
  },
};
