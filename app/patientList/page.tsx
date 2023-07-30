"use client";
import React from "react";
import PageLayout from "../pageComponents/PageLayout";
import { Input, Col, Row, Typography, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useRouter } from "next/navigation";

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

  const data = [
    {
      key: "7030827",
      id: "7030827",
      name: "Annamaria402",
      gender: "F",
      birthDate: "1980-07-29",
    },
    {
      id: "00-007d0d26-9ed9-4fdf-8d2a-9f64ac4319cb",
      key: "00-007d0d26-9ed9-4fdf-8d2a-9f64ac4319cb",
      name: "Tiana543",
      gender: "F",
      birthDate: "1955-07-11",
    },
    {
      id: "00-0221a733-9dbb-43b3-bc78-20546793e622",
      key: "00-0221a733-9dbb-43b3-bc78-20546793e622",
      name: "Guillermo498",
      gender: "M",
      birthDate: "1960-10-12",
    },
    {
      id: "00-0254de23-cc27-4e6b-a384-16a0ac45b71e",
      key: "00-0254de23-cc27-4e6b-a384-16a0ac45b71e",
      name: "Minh326",
      gender: "F",
      birthDate: "1988-03-14",
    },
    {
      id: "00-097d1c93-4142-4c08-86ca-4966c35f83f8",
      key: "00-097d1c93-4142-4c08-86ca-4966c35f83f8",
      name: "Alfred550",
      gender: "M",
      birthDate: "1952-02-13",
    },
    {
      id: "00-13e3540b-698a-462e-8e0f-6893866b695a",
      key: "00-13e3540b-698a-462e-8e0f-6893866b695a",
      name: "Eusebio566",
      gender: "M",
      birthDate: "2018-03-10",
    },
    {
      id: "00-148a3e31-4d33-4c3f-a8f8-fcc3312fddf6",
      key: "00-148a3e31-4d33-4c3f-a8f8-fcc3312fddf6",
      name: "Damion480",
      gender: "M",
      birthDate: "1970-05-13",
    },
    {
      id: "00-15ff0f7a-48a3-40f3-86fa-cf89a31c69fd",
      key: "00-15ff0f7a-48a3-40f3-86fa-cf89a31c69fd",
      name: "Lucy743",
      gender: "F",
      birthDate: "2009-11-20",
    },
    {
      id: "00-185a3b84-228d-4e0a-af10-4f10132cb053",
      key: "00-185a3b84-228d-4e0a-af10-4f10132cb053",
      name: "Pierre431",
      gender: "M",
      birthDate: "1955-06-11",
    },
    {
      id: "00-1c7b22d6-5a8b-449d-bffa-972a38387a4c",
      key: "00-1c7b22d6-5a8b-449d-bffa-972a38387a4c",
      name: "Gerard367",
      gender: "M",
      birthDate: "2017-11-29",
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
          dataSource={data}
          columns={columns}
          style={{ marginTop: "8px" }}
          size="small"
        />
      </>
    </PageLayout>
  );
};

export default PatientList;
