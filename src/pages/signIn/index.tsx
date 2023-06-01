import { Button, Form, Input, message, Modal } from "antd";
import React, { useEffect, useReducer, useState } from "react";
import styles from "./index.less";
import { initialState, reducer } from "./model";
import { signupHandle, loginHandle } from "./model";

interface IProps {
  callback?: (res: any) => void;
}
const SignIn: React.FC<IProps> = ({ callback }) => {
  const [form] = Form.useForm();
  const [signUpForm] = Form.useForm();
  const [visible, setVisible] = useState<boolean>(false);
  const [state, dispatch] = useReducer(reducer, initialState as any);

  const signInHandle = async () => {
    const values = await form.validateFields();
    console.log(values);
    loginHandle(values).then((res) => {
      message.success(res?.msg);
      localStorage.setItem("Authorization", res?.token);
    });
  };
  const signUpHandle = async () => {
    const values = await signUpForm.validateFields();
    signupHandle(values).then((res) => {
      message.success(res?.msg);
      setVisible(false);
      signUpForm?.resetFields();
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}></div>
      <aside className={styles.right}>
        <div className={styles.form_wrap}>
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
              name={["username", "hahaha"]}
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
            <Button onClick={() => setVisible(true)}>注册</Button>
          </div>
        </div>
      </aside>
      <Modal
        title="注册"
        destroyOnClose
        okText="注册"
        cancelText="取消"
        width={520}
        open={visible}
        onCancel={() => setVisible(false)}
        onOk={signUpHandle}
      >
        <div>
          <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 15 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            form={signUpForm}
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[
                { required: true, message: "请输入用户名" },
                { type: "string" },
              ]}
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

            <Form.Item
              label="手机号"
              name="phone"
              rules={[{ required: true, message: "请输入手机号" }]}
            >
              <Input />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default SignIn;
