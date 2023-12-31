"use client";
import React from "react";
import { Table, Typography, Space, Button } from "antd";
import { medications } from "../../../data/medicationData";
import { useSearchParams } from "next/navigation";
import PageLayout from "../../../pageComponents/PageLayout";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { patientData } from "@/app/data/patientData";
import PatientInfo from "@/app/pageComponents/patientInfo";

const { Title } = Typography;
const MedicationComparePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const medicineName: any = searchParams.get("medicine");
  const genericNameFromQueryParam = medicineName.split(" (")[0];
  const similarMedications = medications.filter(
    (medication) => medication.generic_name === genericNameFromQueryParam
  );
  const patientId = usePathname().split("/")[2];
  const patient: any = patientData.find((pt) => pt.id === patientId);
  const columns = [
    {
      title: "Brand Name",
      dataIndex: "brand_name",
      key: "brand_name",
    },
    {
      title: "Unit Dose",
      dataIndex: "unit_dose",
      key: "unit_dose",
    },
    {
      title: "Carbon Emission",
      dataIndex: "carbon_emission_per_unit_dose",
      key: "carbon_emission_per_unit_dose",
      sorter: (a: any, b: any) =>
        a.carbon_emission_per_unit_dose - b.carbon_emission_per_unit_dose,
    },
    {
      title: "Carbon Footprint",
      dataIndex: "carbon_footprint_rating",
      key: "carbon_footprint_rating",
      render: (value: number) => {
        let color;
        switch (value) {
          case 0:
            color = "green";
            break;
          case 1:
            color = "blue";
            break;
          case 2:
            color = "goldenrod";
            break;
          case 3:
            color = "red";
            break;
          default:
            color = "black";
        }
        return <span style={{ color, fontWeight: "bolder" }}>{value}</span>;
      },
    },
    {
      title: "Cost per Unit Dose",
      dataIndex: "cost_per_unit_dose",
      key: "cost_per_unit_dose",
      sorter: (a: any, b: any) => a.cost_per_unit_dose - b.cost_per_unit_dose,
    },
    {
      title: "Action",
      key: "action",
      render: (text: any, record: any) => (
        <Button
          onClick={() =>
            router.push(
              `./prescribing?medicine=${record.generic_name}(${record.brand_name})`
            )
          }
          type="link"
        >
          Select
        </Button>
      ),
    },
  ];
  return (
    <PageLayout>
      <PatientInfo patient={patient} />
      <div
        style={{
          width: "70%",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Space direction="vertical" size="middle">
          <Title level={1}>{genericNameFromQueryParam}</Title>
          <Table
            dataSource={similarMedications}
            columns={columns}
            rowKey="brand_name"
            rowClassName={() => "table-row-hover"}
            bordered
          />
        </Space>
      </div>
    </PageLayout>
  );
};

export default MedicationComparePage;
