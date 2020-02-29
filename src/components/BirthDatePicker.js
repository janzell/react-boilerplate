import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

const BirthDatePicker = props => {
  const disabledDate = current => {
    // Can not select days after today and today
    return current && current > moment().startOf('day');
  };
  return <DatePicker {...props} disabledDate={disabledDate} size="large" />;
};

export default BirthDatePicker;
