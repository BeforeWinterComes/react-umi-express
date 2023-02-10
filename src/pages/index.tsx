import { Button } from "antd";
import React from "react";
import { history as router } from "umi";

const Home: React.FC = () => {
  // 跳转demo页
  const handleToDemo = () => {
    router.push("/demo");
  };
  return (
    <div>
      <Button type="primary" onClick={handleToDemo}>
        Demo页
      </Button>
    </div>
  );
};
export default Home;
