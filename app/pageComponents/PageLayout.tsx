"use client";
import React, { ReactNode } from "react";
import { Button, Layout, Typography } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Image from "next/image";
interface Props {
  children: ReactNode;
}

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const PageLayout = ({ children }: Props) => {
  const router = useRouter();
  return (
    <Layout style={{ height: "100%" }}>
      <Header
        style={{
          top: 0,
          zIndex: 1,
          width: "100%",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#016dae",
          margin: "0px",
        }}
      >
        <Image
          src="/Monash_University_logo.svg.png"
          alt="logo"
          width="163"
          height="50"
          style={{ marginLeft: "0px" }}
        />
        <Title
          level={2}
          style={{ color: "white", margin: 0, lineHeight: "1.2" }}
        >
          myPrescribe
        </Title>

        <Button
          type="primary"
          icon={<HomeOutlined />}
          style={{
            height: "40px",
            width: "40px",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => router.push("/panelPage")}
        />
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
