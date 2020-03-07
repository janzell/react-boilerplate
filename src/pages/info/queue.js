import React from "react";
import MainLayout from "../../layouts/main";
import { Row, Col, Typography } from "antd";

const Queue = () => {
  return (
    <MainLayout>
      <Row>
        <Col span={24}>
          <Typography>Queue</Typography>
        </Col>
      </Row>
    </MainLayout>
  );
};
export default Queue;
