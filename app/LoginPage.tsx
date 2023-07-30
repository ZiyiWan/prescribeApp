"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Layout, Typography, Button, Checkbox, Form, Input } from "antd";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const InfoInputField = () => {
  const router = useRouter();

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item label="User Name" name="username">
        <Input />
      </Form.Item>

      <Form.Item label="Password" name="password">
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => {
            router.push("/panelPage");
          }}
        >
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};
const LoginPage = () => {
  return (
    <>
      <Layout>
        <Header
          style={{
            background: "white",
            textAlign: "center",
          }}
        >
          <Title level={2}>myPrescribe</Title>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            height: "80vh",
            display: "flex", // Added this line
            justifyContent: "center", // Added this line
          }}
        >
          <InfoInputField />
        </Content>
      </Layout>
    </>
  );
};

export default LoginPage;
