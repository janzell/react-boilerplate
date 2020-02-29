import React, { useState } from 'react';
import { Button, Descriptions, Divider, List, Typography } from 'antd';
import _ from 'lodash';
import { CloseOutlined } from '@ant-design/icons';

const ServicesAvailed = props => {
  const { setVisibleAddService } = props;
  const { Title } = Typography;
  const data = [
    { name: 'Service 1', price: 200 },
    { name: 'Service 2', price: 200 },
    { name: 'Service 3', price: 200 },
    { name: 'Service 4', price: 200 },
    { name: 'Service 5', price: 200 },
    { name: 'Service 6', price: 2200 },
    { name: 'Service 7', price: 1200 }
  ];
  const [discount, setDiscount] = useState(0);
  const [vat, setVat] = useState(0);

  return (
    <>
      <List.Item
        key="desc"
        actions={[
          <Button
            type="secondary"
            className="pull-right"
            onClick={() => setVisibleAddService(true)}
          >
            Add Services
          </Button>
        ]}
      >
        <List.Item.Meta
          title={
            <Title className="queue-services-title p-0">
              Services Availed:{' '}
              <span className="link-hover-color">{data.length}</span>
            </Title>
          }
        />
      </List.Item>

      <Divider className="m-0" />
      <div className="queue-services-list">
        <List
          size="small"
          bordered={false}
          dataSource={data}
          renderItem={item => (
            <List.Item key={item.name}>
              <span className="text-primary" title="Remove">
                <CloseOutlined /> {item.name}{' '}
              </span>
              <span className="pull-right">{item.price.toFixed(2)}</span>{' '}
            </List.Item>
          )}
        />
      </div>
      <Divider className="m-0" />
      <div className="queue-services-summary">
        <Descriptions column={1}>
          <Descriptions.Item key="subtotal" label="Subtotal" className="bold">
            {_.sumBy(data, 'price').toFixed(2)}
          </Descriptions.Item>
          <Descriptions.Item key="discount" label="Discount">
            {discount.toFixed(2)}
          </Descriptions.Item>
          <Descriptions.Item key="vat" label="VAT">
            {vat.toFixed(2)}
          </Descriptions.Item>
        </Descriptions>
        <Divider className="m-0" />
        <div className="queue-services-amt-due">
          <Descriptions column={1}>
            <Descriptions.Item
              key="amt-due"
              label="Amount Due"
              className="bold"
            >
              {_.sumBy(data, 'price').toFixed(2)}
            </Descriptions.Item>
          </Descriptions>
        </div>
      </div>
    </>
  );
};

export default ServicesAvailed;
