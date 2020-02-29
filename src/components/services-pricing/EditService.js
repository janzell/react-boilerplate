import React, { useEffect } from 'react';
import { Button, Drawer, Form, Typography, message } from 'antd';
import { useMutation } from '@apollo/react-hooks';
import { RECORD_UPDATE_FAILED, RECORD_UPDATED } from 'lang';
import ServiceForm from 'components/services-pricing/ServiceForm';
import { UPDATE_SERVICE } from 'queries/services';
import ServicesPricesIcon from 'components/services-pricing/ServicesPricingIcon';

const EditService = props => {
  const { show, setVisibleEditService, setShouldRefetch, service } = props;

  const { Title } = Typography;
  const [editServiceForm] = Form.useForm();
  const [editService] = useMutation(UPDATE_SERVICE);
  const { validateFields, setFieldsValue, resetFields } = editServiceForm;

  const submitForm = () => {
    validateFields()
      .then(values => {
        editService({
          variables: {
            id: service.key,
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
        <ServicesPricesIcon /> Edit Service
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
    return setVisibleEditService(false);
  };

  useEffect(() => {
    service && setFieldsValue(service);
  }, [service, setFieldsValue]);

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
      <ServiceForm hideRequiredMark form={editServiceForm} service={service} />
    </Drawer>
  );
};

export default EditService;
