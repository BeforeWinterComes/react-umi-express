import { Button, Form, Input } from "antd";
import React from "react";
import axios from "axios";
import styles from "./index.less";

const Demo: React.FC = () => {
  const [form] = Form.useForm();

  const signInHandle = async () => {
    const values = await form.validateFields();
    console.log(values);
  };
  const signUpHandle = async () => {
    const values = await form.validateFields();
    const { username, password } = values;
    console.log(values);
    axios
      .post("http://localhost:3008/api/signup", {
        name: username,
        address: password,
      })
      .then((res: any) => console.log(res));
  };

  return (
    <div className={styles.container}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        form={form}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: "请输入用户名" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: "请输入密码" }]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
      <div className={styles.operate}>
        <Button onClick={signInHandle} type="primary">
          登录
        </Button>
        <Button onClick={signUpHandle}>注册</Button>
      </div>
    </div>
  );
};

export default Demo;
