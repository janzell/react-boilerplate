import React from 'react';
import { message, Select } from 'antd';
import { useQuery } from '@apollo/react-hooks';
import { GET_DEPARTMENTS } from 'queries/department';

const DepartmentSelect = props => {
  const { Option } = Select;
  const { loading, error, data } = useQuery(GET_DEPARTMENTS);

  if (loading) return null;
  if (error) return message.error(error);

  return (
    <Select
      showSearch
      placeholder="Select a department"
      optionFilterProp="children"
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      {...props}
    >
      {data.departments.map(department => (
        <Option key={department.key} value={department.key}>
          {department.name}
        </Option>
      ))}
    </Select>
  );
};

export default DepartmentSelect;
