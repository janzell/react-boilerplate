import React, { useState } from 'react';
import { Descriptions, Divider, List, Typography } from 'antd';
import 'components/QueueServicesAvailed/queue-services-availed.less';
import _ from 'lodash';

const QueueServicesAvailed = props => {
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
      <Title className="queue-services-title text-center">
        Services Availed ({data.length})
      </Title>
      <Divider className="m-0" />
      <div className="queue-services-list">
        <List
          size="small"
          bordered={false}
          dataSource={data}
          renderItem={item => (
            <List.Item key={item.name}>
              {item.name}{' '}
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

export default QueueServicesAvailed;
