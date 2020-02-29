import { Col, Form, Input, Row } from 'antd';
import React from 'react';

const DepartmentForm = props => {
  return (
    <Form layout="vertical" {...props}>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter name' }]}
          >
            <Input placeholder="Please enter name" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="code"
            label="Code"
            rules={[{ required: true, message: 'Please enter code' }]}
          >
            <Input placeholder="Please enter code" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default DepartmentForm;
