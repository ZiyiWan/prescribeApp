"use client";
import React, { ReactNode } from "react";
import { Layout, Typography } from "antd";

interface Props {
  children: ReactNode;
}

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const PageLayout = ({ children }: Props) => {
  return (
    <Layout style={{ height: "100%" }}>
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
          height: "100%",
        }}
      >
        {children}
      </Content>
      <Footer style={{ textAlign: "center" }}>
        myPrescribe app ©2023 Created by Ziyi
      </Footer>
    </Layout>
  );
};

export default PageLayout;
