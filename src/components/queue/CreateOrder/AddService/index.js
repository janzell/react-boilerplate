import React from 'react';
import { Button, Col, Drawer, Form, Input, Row, Table, Typography } from 'antd';
import { PlusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import './add-service.less';

const AddService = props => {
  const { show, setVisibleAddService } = props;
  const { Title } = Typography;
  const { Search } = Input;

  const title = () => {
    return (
      <Title className="content-title">
        <PlusCircleOutlined /> Add Service
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
          Add
        </Button>
      </div>
    );
  };

  const closeDrawer = () => {
    return setVisibleAddService(false);
  };

  const columns = [
    {
      title: 'Service Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, row, index) => {
        return (
          <span className="text-primary">
            <PlusOutlined className="mr-base" />
            {text}
          </span>
        );
      },
      sorter: (a, b) => {
        return a.name.localeCompare(b.name);
      }
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      align: 'right',
      sorter: (a, b) => a.price - b.price,
      render: value => value.toFixed(2)
    }
  ];
  const data = [];
  for (let i = 0; i < 20; i++) {
    data.push({
      key: i,
      name: `Service Name ${i}`,
      price: 1200 + i
    });
  }

  return (
    <Drawer
      title={title()}
      placement="right"
      closable={true}
      onClose={closeDrawer}
      visible={show}
      className="drawer-add-service"
      width={650}
      footer={footer()}
    >
      <Row>
        <Col md={24} className="base-padding pb-0">
          <Title className="queue-services-title p-0 mb-base">
            Services Availed: <span className="link-hover-color">7</span>
          </Title>
          <Form.Item className="mb-base">
            <Search
              placeholder="Search service"
              onSearch={value => console.log(value)}
              size="large"
            />
          </Form.Item>
        </Col>
      </Row>
      <Table
        className="add-services-list"
        columns={columns}
        dataSource={data}
        scroll={{ y: 690 }}
        pagination={false}
      />
    </Drawer>
  );
};

export default AddService;
