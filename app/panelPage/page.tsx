"use client";
import React from "react";
import { Layout, Col, Row, Typography, Button } from "antd";
import {
  SnippetsOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const App: React.FC = () => {
  const router = useRouter();
  return (
    <Layout>
      <Header
        style={{
          top: 0,
          zIndex: 1,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Title level={2} style={{ color: "white" }}>
          myPrescribe
        </Title>
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: "0 50px",
          height: "80vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Row style={{ marginTop: "10px" }} gutter={10}>
            <Col span={8}>
              <Button
                block
                style={{
                  height: "200px",
                  margin: "10px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
                shape="round"
                icon={<TeamOutlined style={{ fontSize: "40px" }} />}
                onClick={()=>{
                  router.push("/patientList")
                }}
              >
                <span style={{ fontSize: "28px" }}>My Patients</span>
              </Button>
            </Col>
            <Col span={8}>
              <Button
                block
                style={{
                  height: "200px",
                  margin: "10px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
                shape="round"
                icon={<SnippetsOutlined style={{ fontSize: "40px" }} />}
                onClick={()=>{
                  router.push("/prescribePage")
                }}
              >
                <span style={{ fontSize: "28px" }}>Prescribe</span>
              </Button>
            </Col>
            <Col span={8}>
              <Button
                block
                style={{
                  height: "200px",
                  margin: "10px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
                shape="round"
                icon={<UserOutlined style={{ fontSize: "40px" }} />}
                onClick={()=>{
                  router.push("/myProfile")
                }}
              >
                <span style={{ fontSize: "28px" }}>My profile</span>
              </Button>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        myPrescribe app ©2023 Created by Ziyi
      </Footer>
    </Layout>
  );
};

export const PanelPage = () => {
  return <App />;
};

export default PanelPage;
