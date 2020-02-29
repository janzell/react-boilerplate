import React, { useState } from 'react';
import { Row, Col, Typography, Divider, Button } from 'antd';

import QueueNoCircle from 'components/QueueNoCircle';
import QueueStatus from 'components/QueueStatus';
import QueueServicesAvailed from 'components/QueueServicesAvailed';
import QueueListContainer from 'components/queue/QueueListContainer';
import CreateOrder from 'components/queue/CreateOrder';
import QueueIcon from 'components/queue/QueueIcon';

const Queue = () => {
  const { Title } = Typography;
  const [visibleCreateOrder, setVisibleCreateOrder] = useState(false);

  return (
    <>
      <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]}>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} className="gutter-row">
          <div className="white-container">
            <div className="content-header">
              <Title className="content-title">
                <QueueIcon /> Now Serving
              </Title>
            </div>
            <div className="content-body pb-0">
              <QueueNoCircle number={35} />
              <QueueStatus status="Senior" />
              <QueueServicesAvailed />
            </div>
            <Divider className="m-0" />
            <div className="content-footer text-center">
              <Button
                type="primary"
                className="btn-rounded med"
                onClick={() => setVisibleCreateOrder(!visibleCreateOrder)}
              >
                Create Order
              </Button>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={16} lg={16} xl={16} className="gutter-row">
          <div className="white-container">
            <QueueListContainer />
          </div>
        </Col>
      </Row>
      <CreateOrder
        show={visibleCreateOrder}
        setVisibleCreateOrder={setVisibleCreateOrder}
      />
    </>
  );
};
export default Queue;
