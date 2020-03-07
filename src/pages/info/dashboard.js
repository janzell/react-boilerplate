import React from "react";
import MainLayout from "../../layouts/main";
import { Row, Col, Typography } from "antd";

const Dashboard = () => {
  return (
    <MainLayout>
      <Row>
        <Col span={24}>
          <Typography>Dashboard</Typography>
        </Col>
      </Row>
    </MainLayout>
  );
};
export default Dashboard;
