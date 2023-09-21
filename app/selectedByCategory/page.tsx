"use client";
import React, { useEffect } from "react";
import { Table, Typography, Space, Button } from "antd";
import { useSearchParams } from "next/navigation";
import PageLayout from "../pageComponents/PageLayout";
import { useRouter } from "next/navigation";
import { medications } from "../data/medicationData";

const { Title } = Typography;

const MedicationsInThisCategory = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryName: any = searchParams.get("category");

  const firstEightMedications = medications.slice(0, 8);
  const columns = [
    { title: "Generic Name", dataIndex: "generic_name", key: "generic_name" },
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
              `/prescribing?medicine=${record.generic_name}(${record.brand_name})`
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
    <>
      <PageLayout>
        <div
          style={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Space direction="vertical" size="middle">
            <Title level={1}>{categoryName}</Title>
            <Table
              dataSource={firstEightMedications}
              columns={columns}
              rowKey="brand_name"
              rowClassName={() => "table-row-hover"}
              bordered
            />
          </Space>
        </div>
      </PageLayout>
    </>
  );
};

export default MedicationsInThisCategory;
