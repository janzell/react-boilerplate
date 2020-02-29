import React from 'react';
import { Form, Input, Checkbox, Button } from 'antd';

const Login = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  };

  return (
    <Form {...layout} name="basic" initialValues={{ remember: true }}>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
