"use client";
import PageLayout from "@/app/pageComponents/PageLayout";
import React from "react";
import { Button, Descriptions, Table, Badge } from "antd";
import type { ColumnsType } from "antd/es/table";
import { FormOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const columns: ColumnsType<any> = [
  {
    title: "MEDICATION",
    key: "medication",
    dataIndex: "medication",
  },
  {
    title: "CODE",
    key: "code",
    dataIndex: "code",
  },
  {
    title: "CONDITION",
    key: "condition",
    dataIndex: "condition",
  },
  {
    title: "PRACTITIONER",
    key: "practitioner",
    dataIndex: "practitioner",
  },
];

const data = [
  {
    code: "106892",
    condition: "Prediabetes",
    practitioner: "Dr.Brooks264 Sporer811",
    medication:
      "insulin human, isophane 70 UNT/ML / Regular Insulin, Human 30 UNT/ML Injectable Suspension [Humulin]",
  },
  {
    code: "106892",
    condition: "Prediabetes",
    practitioner: "Dr.Brooks264 Sporer811",
    medication: "Nasal spray 500ug per mL (0.05) 10mL",
  },
];

const MedicationRequestPage = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <PageLayout>
      <Button
        type="primary"
        size="large"
        style={{ backgroundColor: "#60DF46", marginTop: "10px" }}
        icon={<FormOutlined />}
        onClick={() => {
          router.push(`./${pathname.split("/")[2]}/prescribePage/`);
        }}
      >
        Prescribe
      </Button>
      <div
        style={{
          marginTop: "15px",
          flexDirection: "column",
          justifyContent: "center",
          height: "42%",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          background: "white",
        }}
      >
        <Descriptions title="Patient Info" column={2} bordered>
          <Descriptions.Item label="ID">7030827</Descriptions.Item>
          <Descriptions.Item label="Name">
            Mrs. Annamaria402 Schowalter414
          </Descriptions.Item>
          <Descriptions.Item label="Gender">Female</Descriptions.Item>
          <Descriptions.Item label="DOB">1980-07-29</Descriptions.Item>
          <Descriptions.Item label="Marital Status">M</Descriptions.Item>
          <Descriptions.Item label="Preferred Language">
            English
          </Descriptions.Item>
          <Descriptions.Item label="Main Address">
            571 Mills Junction, 84044 Salt Lake City, Utah
          </Descriptions.Item>
          <Descriptions.Item label="Contact Info">
            555-689-5221
          </Descriptions.Item>
        </Descriptions>
      </div>
      <div
        style={{
          marginTop: "15px",
          flexDirection: "column",
          justifyContent: "center",
          height: "10%", // You can adjust this as needed
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          background: "white",
        }}
      >
        <h3>Allergy Intolerance</h3>
        <Badge color="red" text="Penicillin" />
      </div>
      <div
        style={{
          marginTop: "15px",
          flexDirection: "column",
          justifyContent: "center",
          height: "42%",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          background: "white",
        }}
      >
        <h3>Medication History</h3>
        <Table
          dataSource={data}
          columns={columns}
          style={{ marginTop: "8px" }}
          size="small"
        />
      </div>
    </PageLayout>
  );
};

export default MedicationRequestPage;
