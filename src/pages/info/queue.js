import React from "react";
import { Row, Col, Typography } from "antd";
import { UserSwitchOutlined } from "@ant-design/icons";
import QueueNoCircle from "../../components/queue-no-circle/index";

const Queue = () => {
  const { Title } = Typography;
  return (
    <>
      <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]}>
        <Col xs={24} sm={24} md={6} lg={6} xl={8} className="gutter-row">
          <div className="white-container">
            <div className="content-header">
              <Title className="content-title">
                <UserSwitchOutlined /> Now Serving
              </Title>
            </div>
            <div className="content-body">
              <QueueNoCircle number={35} />
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={18} lg={18} xl={16} className="gutter-row">
          <div className="white-container">
            <Typography>Right content</Typography>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default Queue;
