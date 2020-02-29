import React, { useEffect, useState } from 'react';
import { Card, message, Skeleton, Button } from 'antd';
import CreateDepartment from 'components/department/CreateDepartment';
import { GET_DEPARTMENTS } from 'queries/department';
import { useQuery } from '@apollo/react-hooks';
import EditDepartment from 'components/department/EditDepartment';
import DepartmentList from 'components/department/DepartmentList';
import DepartmentIcon from 'components/department/DepartmentIcon';

const Departments = () => {
  const [visibleAddDepartment, setVisibleAddDepartment] = useState(false);
  const [visibleEditDepartment, setVisibleEditDepartment] = useState(false);
  const [currentDept, setCurrentDept] = useState(false);
  const [shouldRefetch, setShouldRefetch] = useState(false);
  const { loading, error, data, refetch } = useQuery(GET_DEPARTMENTS);

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
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button
            type="link"
            size="small"
            onClick={() => editDepartment(record)}
          >
            Edit
          </Button>
        </span>
      )
    }
  ];

  const editDepartment = department => {
    setCurrentDept(department);
    setVisibleEditDepartment(true);
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
          <DepartmentIcon /> DEPARTMENTS
        </span>
      }
      extra={
        <Button
          type="primary"
          size="small"
          onClick={() => setVisibleAddDepartment(true)}
        >
          ADD NEW
        </Button>
      }
      className="white-container"
    >
      <DepartmentList
        dataSource={data.departments}
        columns={columns}
        pagination={!data.departments.length ? false : ''}
      />
      <CreateDepartment
        show={visibleAddDepartment}
        setVisibleAddDepartment={setVisibleAddDepartment}
        setShouldRefetch={setShouldRefetch}
      />
      <EditDepartment
        show={visibleEditDepartment}
        setVisibleEditDepartment={setVisibleEditDepartment}
        setShouldRefetch={setShouldRefetch}
        department={currentDept}
      />
    </Card>
  );
};
export default Departments;
