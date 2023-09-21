"use client";
import PageLayout from "@/app/pageComponents/PageLayout";
import { SearchOutlined } from "@ant-design/icons";
import { Row, Col, Input, Typography, Card, Image, AutoComplete } from "antd";
import React from "react";
import { patientData } from "@/app/data/patientData";
import { medications } from "../../../data/medicationData";
import { usePathname } from "next/navigation";
import PatientInfo from "@/app/pageComponents/patientInfo";
const { Title } = Typography;
const { Meta } = Card;

const categories = [
  {
    title: "Asthma",
    description:
      "Inhaled relievers and preventers for Asthma, COPD and respiratory conditions.",
    src: "/asthma.png",
  },
  {
    title: "Mental Health",
    description:
      "Medications for the treatment of anxiety, depression and other mental health care conditions.",
    src: "/mental-health-line.png",
  },
  {
    title: "Blood Pressure & Heart",
    description:
      "Medications for high blood pressure, heart disease and stroke prevention.",
    src: "/blood_pressure.png",
  },
  {
    title: "Pain",
    description: "Pain relief for muscle, joint and so on.",
    src: "/pain.png",
  },
  {
    title: "Diabetes",
    description: "Medications for the management of blood sugar control.",
    src: "/diabetes.png",
  },
  {
    title: "Infection",
    description:
      "Medications and treatments for bacterial, viral, and fungal infections.",
    src: "/infection.png",
  },
];

const CategoryList: React.FC = () => (
  <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
    {categories.map((category, index) => (
      <Col span={8} key={`${category.title}-${index}`}>
        <Card
          bordered={true}
          style={{
            display: "flex",
            alignItems: "center",
            background: "#f3fafb",
          }}
          hoverable={true}
          onClick={() => {
            window.location.href = `./selectedByCategory?category=${category.title}`;
          }}
        >
          <Row align="middle">
            <Col span={14}>
              <Meta
                title={category.title}
                description={category.description}
                style={{ color: "#1889be" }}
              />
            </Col>
            <Col span={10}>
              <Image
                alt={`${category.title}Icon`}
                src={category.src}
                preview={false}
              />
            </Col>
          </Row>
        </Card>
      </Col>
    ))}
  </Row>
);

const PrescribePage = () => {
  const [options, setOptions] = React.useState([]);
  const patientId = usePathname().split("/")[2];
  const patient: any = patientData.find((pt) => pt.id === patientId);
  const handleSearch = (value: any) => {
    if (value) {
      const searchResults: any = medications
        .filter(
          (medication) =>
            medication.generic_name
              .toLowerCase()
              .includes(value.toLowerCase()) ||
            medication.brand_name.toLowerCase().includes(value.toLowerCase())
        )
        .map((medication) => ({
          value: `${medication.generic_name} (${medication.brand_name})`,
          label: (
            <div>
              {`${medication.generic_name} (${medication.brand_name})`}
              <div style={{ color: "#888" }}>
                Carbon Footprint Rating: {medication.carbon_footprint_rating}
              </div>
            </div>
          ),
        }));
      setOptions(searchResults);
    } else {
      setOptions([]);
    }
  };

  const handleSelect = (value: any) => {
    window.location.href = `./medicationCompare?medicine=${value}`;
  };

  return (
    <div style={{ width: "100%", justifyContent: "center" }}>
      <PageLayout>
        <PatientInfo patient={patient} />
        <Row justify="space-between">
          <Col>
            <Title type="secondary" style={{ color: "dodgerblue" }}>
              Search by name
            </Title>
          </Col>
        </Row>
        <AutoComplete
          options={options}
          style={{ width: "100%" }}
          onSearch={handleSearch}
          onSelect={handleSelect}
        >
          <Input
            size="large"
            prefix={<SearchOutlined />}
            allowClear
            placeholder="Search by medicine name"
          />
        </AutoComplete>
        <Title type="secondary" style={{ color: "dodgerblue" }}>
          Or Choose a Category
        </Title>
        <CategoryList />
      </PageLayout>
    </div>
  );
};

export default PrescribePage;
