import React from "react";
import { Typography, Row, Col, Card, Avatar } from "antd";

const { Text } = Typography;

type Patient = {
  key: string;
  id: string;
  name: string;
  gender: "M" | "F";
  birthDate: string;
};

interface PatientInfoProps {
  patient: Patient;
  avatarUrl?: string; // Optional prop for avatar image URL
}

const PatientInfo: React.FC<PatientInfoProps> = ({ patient, avatarUrl }) => {
  return (
    <Card
      style={{
        marginBottom: 20,
        borderRadius: 10,
        marginTop: 20,
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#e6f2ff",
      }}
    >
      <Row gutter={8} align="middle">
        {" "}
        {/* Decreased gutter size */}
        <Col span={4}>
          <Avatar
            shape="square"
            size={50}
            src={avatarUrl}
            icon={!avatarUrl && "Pt"}
          />
        </Col>
        <Col span={20}>
          <Row gutter={16} style={{ marginBottom: 10 }}>
            <Col span={8}>
              <Text strong>Name:</Text> {patient.name}
            </Col>
            <Col span={8}>
              <Text strong>Gender:</Text>{" "}
              {patient.gender === "M" ? "Male" : "Female"}
            </Col>
            <Col span={8}>
              <Text strong>Birth Date:</Text> {patient.birthDate}
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={8}>
              <Text strong>Phone Number:</Text> +123 456 7890
            </Col>
            <Col span={8}>
              <Text strong>Email Address:</Text> example@example.com
            </Col>
            <Col span={8}>
              <Text strong underline>
                Allergy Intolerance:
              </Text>{" "}
              Penicillin
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default PatientInfo;
