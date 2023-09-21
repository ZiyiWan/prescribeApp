"use client";
import React from "react";
import PageLayout from "../pageComponents/PageLayout";
import { Input, Col, Row, Typography, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useRouter } from "next/navigation";
import { patientData } from "../data/patientData";

const { Search } = Input;
const { Title } = Typography;

const PatientList = () => {
  const router = useRouter();
  const columns: ColumnsType<any> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      responsive: ["lg"],
    },
    {
      title: "Name",
      key: "name",
      render: (record: any) => {
        return (
          <a
            onClick={() => {
              router.push(`/medicationRequest/${record.id}`);
            }}
          >
            {record.name}
          </a>
        );
      },
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      filters: [
        { text: "F", value: "F" },
        { text: "M", value: "M" },
      ],
      onFilter: (value: any, record: any) => record.gender.indexOf(value) === 0,
      responsive: ["sm"],
    },
    {
      title: "BirthDate",
      dataIndex: "birthDate",
      key: "birthDate",
      sorter: (a: any, b: any) =>
        Date.parse(a.birthDate) - Date.parse(b.birthDate),
      //sortDirections: ['descend'],
      responsive: ["sm"],
    },
    {
      title: "Age",
      key: "age",
      render: (record: any) => {
        var today = new Date();
        var birthDate = new Date(record.birthDate);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        return <div>{age}</div>;
      },
      sorter: (a: any, b: any) =>
        Date.parse(a.birthDate) - Date.parse(b.birthDate),
      //sortDirections: ['descend'],
    },
    {
      title: "Operation",
      key: "op",
      render: (record: any) => {
        return (
          <Space size="middle">
            <a>Edit</a>
            <a
              style={{ color: "red" }}
              onClick={() => {
                console.log(record);
              }}
            >
              Delete
            </a>
          </Space>
        );
      },
    },
  ];

  return (
    <PageLayout>
      <>
        <Row justify="space-between">
          <Col>
            <Title type="secondary">Patient List</Title>
          </Col>
        </Row>
        <Search
          placeholder="search patient by name or id"
          allowClear
          enterButton="Search"
          size="large"
        />
        <Table
          dataSource={patientData}
          columns={columns}
          style={{ marginTop: "8px" }}
          size="small"
        />
      </>
    </PageLayout>
  );
};

export default PatientList;
