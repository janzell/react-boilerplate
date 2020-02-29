import { Col, Form, Input, InputNumber, Row } from 'antd';
import React from 'react';
import DepartmentSelect from 'components/DepartmentSelect';
import { formatNumber, parseNumber } from 'helpers';

const ServiceForm = props => {
  const { TextArea } = Input;
  const { service } = props;

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
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="department_id"
            label="Department"
            rules={[{ required: true, message: 'Please select department' }]}
          >
            <DepartmentSelect
              defaultValue={service ? service.department_id : ''}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: 'Please enter price' }]}
          >
            <InputNumber
              placeholder="Please enter price"
              formatter={value => formatNumber(value)}
              parser={value => parseNumber(value)}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item name="description" label="Description">
            <TextArea placeholder="Please enter description" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default ServiceForm;
