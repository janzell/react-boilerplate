import React from 'react';
import { Select } from 'antd';

const GenderSelect = props => {
  const { Option } = Select;

  return (
    <Select {...props} size="large">
      <Option value="male">Male</Option>
      <Option value="female">Female</Option>
    </Select>
  );
};

export default GenderSelect;
