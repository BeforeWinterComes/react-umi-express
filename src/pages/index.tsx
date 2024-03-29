import { Button, Table } from "antd";
import React, { useState } from "react";
import { history as router } from "umi";
import styles from "./index.less";
import AnimateContent from "@/components/AnimateContent";

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  // 跳转登录页
  const handleToLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/login");
    }, 2000);
  };

  return (
    <div style={{ width: "100%" }} className={styles.container}>
      <AnimateContent
        title="react-umi-express"
        content="基于umi搭建前端项目，express作为后台代码，旨在熟悉前后端交互逻辑，数据传输等规则，在全栈的道路上蹒跚前行..."
      />
      <Button type="primary" onClick={handleToLogin} loading={loading}>
        Go
      </Button>
    </div>
  );
};
export default Home;
