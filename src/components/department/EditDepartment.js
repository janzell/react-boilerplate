import React, { useEffect } from 'react';
import { Button, Drawer, Form, Typography, message } from 'antd';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_DEPARTMENT } from 'queries/department';
import { RECORD_UPDATE_FAILED, RECORD_UPDATED } from 'lang';
import DepartmentForm from 'components/department/DepartmentForm';
import DepartmentIcon from 'components/department/DepartmentIcon';

const EditDepartment = props => {
  const {
    show,
    setVisibleEditDepartment,
    setShouldRefetch,
    department
  } = props;

  const { Title } = Typography;
  const [editDeptForm] = Form.useForm();
  const [editDepartment] = useMutation(UPDATE_DEPARTMENT);
  const { validateFields, setFieldsValue, resetFields } = editDeptForm;

  const submitForm = () => {
    validateFields()
      .then(values => {
        editDepartment({
          variables: {
            id: department.key,
            input: values
          }
        })
          .then(result => {
            if (result.data) {
              message.success(RECORD_UPDATED);
              setShouldRefetch(true);
            }
          })
          .catch(error => {
            message.error(RECORD_UPDATE_FAILED);
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
        <DepartmentIcon /> Edit Department
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
          Save
        </Button>
      </div>
    );
  };

  const closeDrawer = () => {
    resetFields();
    return setVisibleEditDepartment(false);
  };

  useEffect(() => {
    department && setFieldsValue(department);
  }, [department, setFieldsValue]);

  return (
    <Drawer
      title={title()}
      width={600}
      placement="right"
      closable={true}
      onClose={closeDrawer}
      visible={show}
      footer={footer()}
      destroyOnClose
    >
      <DepartmentForm hideRequiredMark form={editDeptForm} />
    </Drawer>
  );
};

export default EditDepartment;
