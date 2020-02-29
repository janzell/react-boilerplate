import React, { useEffect, useState } from 'react';
import { Button, Card, message, Skeleton } from 'antd';
import ServicesList from 'components/services-pricing/ServicesList';
import ServicesPricesIcon from 'components/services-pricing/ServicesPricingIcon';
import { useQuery } from '@apollo/react-hooks';
import { GET_SERVICES } from 'queries/services';
import CreateService from 'components/services-pricing/CreateService';
import EditService from 'components/services-pricing/EditService';
import { formatNumber } from 'helpers';

const ServicesPricing = () => {
  const [visibleAddService, setVisibleAddService] = useState(false);
  const [visibleEditService, setVisibleEditService] = useState(false);
  const [currentService, setCurrentService] = useState(false);
  const [shouldRefetch, setShouldRefetch] = useState(false);
  const { loading, error, data, refetch } = useQuery(GET_SERVICES);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Code',
      dataIndex: 'code',
      key: 'code'
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
      render: (text, record) => {
        return <span>{record.department.name}</span>;
      }
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      align: 'right',
      render: (text, record) => {
        return <span>{formatNumber(record.price)}</span>;
      }
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button type="link" size="small" onClick={() => editService(record)}>
            Edit
          </Button>
        </span>
      )
    }
  ];

  const editService = service => {
    setCurrentService(service);
    setVisibleEditService(true);
  };

  useEffect(() => {
    shouldRefetch && refetch();
    setShouldRefetch(false);
  }, [shouldRefetch, refetch]);

  if (loading)
    return (
      <Card>
        <Skeleton active />
      </Card>
    );
  if (error) return message.error(error);

  return (
    <Card
      title={
        <span className="content-title">
          <ServicesPricesIcon /> Services & Pricing
        </span>
      }
      extra={
        <Button
          type="primary"
          size="small"
          onClick={() => setVisibleAddService(true)}
        >
          ADD NEW
        </Button>
      }
      className="white-container"
    >
      <Skeleton loading={loading}>
        <ServicesList
          columns={columns}
          dataSource={data.services_and_pricing}
          pagination={!data.services_and_pricing.length ? false : ''}
        />
      </Skeleton>
      <CreateService
        show={visibleAddService}
        setVisibleAddService={setVisibleAddService}
        setShouldRefetch={setShouldRefetch}
      />
      <EditService
        show={visibleEditService}
        setVisibleEditService={setVisibleEditService}
        setShouldRefetch={setShouldRefetch}
        service={currentService}
      />
    </Card>
  );
};
export default ServicesPricing;
