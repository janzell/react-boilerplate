import React from "react";
import "./index.less";
import { Typography } from "antd";

const QueueNoCircle = props => {
  const { number } = props;
  const { Title, Text } = Typography;
  return (
    <div className="text-center">
      <Text className="queue-label">Queue #</Text>
      <div className="queue-no-circle">
        <Title>{number}</Title>
      </div>
    </div>
  );
};

export default QueueNoCircle;
