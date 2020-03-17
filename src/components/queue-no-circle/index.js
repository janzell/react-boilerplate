import React from "react";
import "./index.less";
import { Typography } from "antd";

const QueueNoCircle = () => {
  const { Title, Text } = Typography;
  return (
    <div className="text-center">
      <Text className="queue-label">Queue #</Text>
      <div className="queue-no-circle">
        <Title>35</Title>
      </div>
    </div>
  );
};

export default QueueNoCircle;
