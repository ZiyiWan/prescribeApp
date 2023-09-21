"use client";
import React from "react";
import { Layout, Col, Row, Typography, Button } from "antd";
import {
  SnippetsOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import PageLayout from "../pageComponents/PageLayout";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const PanelPage = () => {
  const router = useRouter();
  return (
    <PageLayout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "90vh",
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
              onClick={() => {
                router.push("/patientList");
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
              onClick={() => {
                router.push("/prescribePage");
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
              onClick={() => {
                router.push("/myProfile");
              }}
            >
              <span style={{ fontSize: "28px" }}>My profile</span>
            </Button>
          </Col>
        </Row>
      </div>
    </PageLayout>
  );
};

export default PanelPage;
