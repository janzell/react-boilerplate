import React from 'react';
import { Button, Drawer, Form, Typography, message } from 'antd';
import { useMutation } from '@apollo/react-hooks';
import { RECORD_ADD_FAILED, RECORD_ADDED } from 'lang';
import ServicesPricesIcon from 'components/services-pricing/ServicesPricingIcon';
import ServiceForm from 'components/services-pricing/ServiceForm';
import { CREATE_SERVICE } from 'queries/services';

const CreateService = props => {
  const { show, setVisibleAddService, setShouldRefetch } = props;
  const { Title } = Typography;
  const [addServiceForm] = Form.useForm();
  const [addService] = useMutation(CREATE_SERVICE);
  const { validateFields, resetFields } = addServiceForm;

  const submitForm = () => {
    validateFields()
      .then(values => {
        addService({
          variables: {
            services: [values]
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
        <ServicesPricesIcon /> Add Service
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
    return setVisibleAddService(false);
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
      <ServiceForm layout="vertical" hideRequiredMark form={addServiceForm} />
    </Drawer>
  );
};

export default CreateService;
