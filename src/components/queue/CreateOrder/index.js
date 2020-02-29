import React, { useState } from 'react';
import { Drawer, Form, Typography, Input, Button, Row, Col } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import GenderSelect from 'components/GenderSelect';
import BirthDatePicker from 'components/BirthDatePicker';
import ServicesAvailed from 'components/queue/CreateOrder/ServicesAvailed';
import AddService from 'components/queue/CreateOrder/AddService';

import './queue-create-order.less';

const CreateOrder = props => {
  const { show, setVisibleCreateOrder } = props;
  const { Title } = Typography;
  const [form] = Form.useForm();
  const [visibleAddService, setVisibleAddService] = useState(false);

  const title = () => {
    return (
      <Title className="content-title">
        <FormOutlined /> Create Order
      </Title>
    );
  };

  const footer = () => {
    return (
      <div className="drawer-footer text-center">
        <Button type="secondary" className="btn-rounded med" onClick={closeDrawer}>
          Cancel
        </Button>
        <Button type="primary" className="btn-rounded med">
          Create
        </Button>
      </div>
    );
  };

  const closeDrawer = () => {
    return setVisibleCreateOrder(false);
  };

  return (
    <Drawer
      title={title()}
      placement="right"
      closable={true}
      onClose={closeDrawer}
      visible={show}
      className="drawer-create-order"
      width={800}
      footer={footer()}
    >
      <Form layout="vertical" form={form} className="form-create-order">
        <Row gutter={[{ xs: 8, sm: 16, md: 16, lg: 24 }, 16]}>
          <Col xs={24} sm={24} md={9} lg={9} xl={9}>
            <Form.Item label="First Name">
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={9} lg={9} xl={9}>
            <Form.Item label="Last Name">
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <Form.Item label="Contact #">
              <Input size="large" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[{ xs: 8, sm: 16, md: 16, lg: 24 }, 16]}>
          <Col xs={24} sm={24} md={9} lg={9} xl={9}>
            <Form.Item label="Gender">
              <GenderSelect />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={9} lg={9} xl={9}>
            <Form.Item label="Birthdate">
              <BirthDatePicker showToday={false} />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="Address">
          <Input size="large" />
        </Form.Item>
        <ServicesAvailed setVisibleAddService={setVisibleAddService} />
      </Form>
      <AddService
        show={visibleAddService}
        setVisibleAddService={setVisibleAddService}
      />
    </Drawer>
  );
};

export default CreateOrder;
