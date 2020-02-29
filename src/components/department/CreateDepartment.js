import React from 'react';
import { Button, Drawer, Form, Typography, message } from 'antd';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_DEPARTMENT } from 'queries/department';
import { RECORD_ADD_FAILED, RECORD_ADDED } from 'lang';
import DepartmentForm from 'components/department/DepartmentForm';
import DepartmentIcon from 'components/department/DepartmentIcon';

const CreateDepartment = props => {
  const { show, setVisibleAddDepartment, setShouldRefetch } = props;
  const { Title } = Typography;
  const [addDeptForm] = Form.useForm();
  const [addDepartment] = useMutation(CREATE_DEPARTMENT);
  const { validateFields, resetFields } = addDeptForm;

  const submitForm = () => {
    validateFields()
      .then(values => {
        addDepartment({
          variables: {
            departments: [values]
          }
        })
          .then(result => {
            if (result.data) {
              message.success(RECORD_ADDED);
              resetFields();
              setShouldRefetch(true);
            }
          })
          .catch(error => {
            message.error(RECORD_ADD_FAILED);
            console.log(error);
          });
      })
      .catch(errorInfo => {
        console.log(errorInfo);
      });
  };

  const title = () => {
    return (
      <Title className="content-title">
        <DepartmentIcon /> Add Department
      </Title>
    );
  };

  const footer = () => {
    return (
      <div className="drawer-footer text-center">
        <Button type="secondary" className="btn-rounded" onClick={closeDrawer}>
          Cancel
        </Button>
        <Button type="primary" className="btn-rounded" onClick={submitForm}>
          Add
        </Button>
      </div>
    );
  };

  const closeDrawer = () => {
    resetFields();
    return setVisibleAddDepartment(false);
  };

  return (
    <Drawer
      title={title()}
      width={600}
      placement="right"
      closable={true}
      onClose={closeDrawer}
      visible={show}
      footer={footer()}
    >
      <DepartmentForm layout="vertical" hideRequiredMark form={addDeptForm} />
    </Drawer>
  );
};

export default CreateDepartment;
