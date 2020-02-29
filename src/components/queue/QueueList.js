import React from 'react';
import moment from 'moment';
import { Button, Empty, Badge, Table, Tag, Card, Typography } from 'antd';
import { OrderedListOutlined } from '@ant-design/icons';

import QueueListActions from './QueueListActions';
// import InfiniteScroll from 'react-infinite-scroller';

const QueueList = props => {
  const { fetchMoreData, error, loading, data, columns, title, count } = props;
  const { Title } = Typography;

  // Handle the selection of a queue.
  const handleSelect = record => {
    console.log(record);
  };

  // Handle the completion of the queue
  const handleComplete = record => {
    console.log(record);
  };

  const actionsItems = [
    { label: 'Select', action: handleSelect },
    { label: 'Complete', action: handleComplete }
  ];

  const columnsProps = columns || [
    {
      title: '#',
      dataIndex: 'queue_number',
      key: 'queue_number',
      render: text => <span>{text}</span>
    },
    {
      title: 'Services',
      dataIndex: 'queue_services',
      key: 'id',
      render: services => (
        <span>
          {services.map((s, i) => {
            return (
              <Tag key={i}>{s.service_and_pricing.name.toUpperCase()}</Tag>
            );
          })}
        </span>
      )
    },
    {
      title: 'Priority',
      dataIndex: 'patient_type',
      key: 'patient_type.code',
      width: 150,
      render: value => <span>{value.code.toUpperCase()}</span>
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: text => {
        let color = 'green';
        if (text === 'pending') {
          color = 'volcano';
        }

        return (
          <Tag color={color} key={text}>
            {text.toUpperCase()}
          </Tag>
        );
      }
    },
    {
      title: '',
      key: 'action',
      width: 150,
      render: (text, record) => {
        return <QueueListActions record={record} actions={actionsItems} />;
      }
    }
  ];

  const titleProps = () => {
    return (
      <span className="content-title">
        <OrderedListOutlined />{' '}
        {title || `On Queue Today - ${moment().format('dddd Do MMMM, YYYY')}`}
      </span>
    );
  };

  const extra = () => {
    return <Badge count={count} style={{ backgroundColor: '#52c41a' }} />;
  };

  const CardContent = () => {
    if (loading) return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
    if (error) return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;

    return (
      <Table
        scroll={{ y: 720 }}
        rowKey="id"
        tableLayout="auto"
        columns={columnsProps}
        dataSource={data.queue_patients}
        pagination={false}
      />
    );
  };

  return (
    <Card title={titleProps()} bordered={false} extra={extra()}>
      <CardContent />
      {data && data.queue_patients.length ? (
        <Button type="link" onClick={fetchMoreData}>
          Load More...
        </Button>
      ) : (
        ''
      )}
    </Card>
  );
};

export default QueueList;
