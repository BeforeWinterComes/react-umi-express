import { Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import React from "react";
import { history as router } from "umi";
import styles from "./index.less";

const Home: React.FC = () => {
  // 跳转demo页
  const handleToDemo = () => {
    router.push("/demo");
  };

  return (
    <div style={{ width: "100%" }} className={styles.container}>
      <Button type="primary" onClick={handleToDemo}>
        Demo页
      </Button>
    </div>
  );
};
export default Home;
