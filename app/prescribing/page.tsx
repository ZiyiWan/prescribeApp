"use client";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import PageLayout from "../pageComponents/PageLayout";
import {
  Button,
  Form,
  Radio,
  Input,
  Select,
  Modal,
  Row,
  Col,
  Typography,
} from "antd";

interface Prescription {
  dose: string;
  route: string;
  frequency: string;
  duration: string;
}

const { Title, Text } = Typography;
const PrescribingPage: React.FC = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("medicine");
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [formData, setFormData] = React.useState<any>(null);

  const onFinish = (values: any) => {
    setFormData(values);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <PageLayout>
      <Row justify="center">
        <Col span={18}>
          <Title level={2} style={{ textAlign: "center" }}>
            Prescribing Information
          </Title>
          <p>Selected Medicine: {search}</p>
          <Form
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
            style={{ marginTop: "20px" }}
          >
            <Form.Item
              label="Dose"
              name="dose"
              rules={[
                { required: true, message: "Please select or input the dose!" },
              ]}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <Radio.Group optionType="button" buttonStyle="solid">
                  <Radio.Button
                    style={{
                      width: "60px",
                      textAlign: "center",
                      marginRight: "10px",
                    }}
                    value="1/4"
                  >
                    1/4
                  </Radio.Button>
                  <Radio.Button
                    style={{
                      width: "60px",
                      textAlign: "center",
                      marginRight: "10px",
                    }}
                    value="1/2"
                  >
                    1/2
                  </Radio.Button>
                  <Radio.Button
                    style={{
                      width: "60px",
                      textAlign: "center",
                      marginRight: "10px",
                    }}
                    value="3/4"
                  >
                    3/4
                  </Radio.Button>
                  <Radio.Button
                    style={{
                      width: "60px",
                      textAlign: "center",
                      marginRight: "10px",
                    }}
                    value="1"
                  >
                    1
                  </Radio.Button>
                  <Radio.Button
                    style={{ width: "60px", textAlign: "center" }}
                    value="2"
                  >
                    2
                  </Radio.Button>{" "}
                  {/* No margin for the last one */}
                </Radio.Group>

                <Input
                  style={{ marginLeft: "10px", width: "100px" }} // added a fixed width for a better look
                  placeholder="Other"
                />
              </div>
            </Form.Item>

            <Form.Item
              label="Route"
              name="route"
              rules={[
                {
                  required: true,
                  message: "Please select or input the route!",
                },
              ]}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <Radio.Group optionType="button" buttonStyle="solid">
                  <Radio.Button
                    style={{
                      width: "100px",
                      textAlign: "center",
                      marginRight: "10px",
                    }}
                    value="Oral"
                  >
                    Oral
                  </Radio.Button>
                  <Radio.Button
                    style={{
                      width: "100px",
                      textAlign: "center",
                      marginRight: "10px",
                    }}
                    value="Intravenous"
                  >
                    Intravenous
                  </Radio.Button>
                  <Radio.Button
                    style={{
                      width: "100px",
                      textAlign: "center",
                      marginRight: "10px",
                    }}
                    value="Topical"
                  >
                    Topical
                  </Radio.Button>
                  {/* Add more routes as needed */}
                </Radio.Group>
                <Input
                  style={{ marginLeft: "10px", width: "100px" }}
                  placeholder="Other"
                />
              </div>
            </Form.Item>

            <Form.Item
              label="Frequency"
              name="frequency"
              rules={[
                { required: true, message: "Please select the frequency!" },
              ]}
              style={{ width: "30%" }}
            >
              <Select placeholder="Select a frequency">
                <Select.Option value="once_a_day">Once a day</Select.Option>
                <Select.Option value="twice_a_day">Twice a day</Select.Option>
                <Select.Option value="three_times_a_day">
                  Three times a day
                </Select.Option>
                <Select.Option value="four_times_a_day">
                  Four times a day
                </Select.Option>
                <Select.Option value="every_morning">
                  Every morning
                </Select.Option>
                <Select.Option value="every_evening">
                  Every evening
                </Select.Option>
                <Select.Option value="at_bedtime">At bedtime</Select.Option>
                <Select.Option value="every_four_hours">
                  Every four hours
                </Select.Option>
                <Select.Option value="every_six_hours">
                  Every six hours
                </Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Duration (days)"
              name="duration"
              rules={[
                {
                  required: true,
                  message: "Please select or input the duration!",
                },
              ]}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <Radio.Group optionType="button" buttonStyle="solid">
                  <Radio.Button
                    style={{
                      width: "60px",
                      textAlign: "center",
                      marginRight: "10px",
                    }}
                    value="7"
                  >
                    7
                  </Radio.Button>
                  <Radio.Button
                    style={{
                      width: "60px",
                      textAlign: "center",
                      marginRight: "10px",
                    }}
                    value="10"
                  >
                    10
                  </Radio.Button>
                  <Radio.Button
                    style={{
                      width: "60px",
                      textAlign: "center",
                      marginRight: "10px",
                    }}
                    value="14"
                  >
                    14
                  </Radio.Button>
                  <Radio.Button
                    style={{
                      width: "60px",
                      textAlign: "center",
                      marginRight: "10px",
                    }}
                    value="30"
                  >
                    30
                  </Radio.Button>
                  <Radio.Button
                    style={{
                      width: "60px",
                      textAlign: "center",
                      marginRight: "10px",
                    }}
                    value="90"
                  >
                    90
                  </Radio.Button>
                </Radio.Group>
                <Input
                  style={{ marginLeft: "10px", width: "100px" }}
                  placeholder="Other"
                />
              </div>
            </Form.Item>

            <Form.Item style={{ textAlign: "center", marginTop: "20px" }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>

          <Modal
            title="Prescription Summary"
            visible={isModalVisible}
            onCancel={closeModal}
            footer={[
              <Button key="back" onClick={closeModal}>
                Confirm
              </Button>,
            ]}
          >
            {formData && (
              <ul>
                {/* Example data rendering */}
                <li>
                  <Text strong>Dose:</Text> {formData.dose}
                </li>
                <li>
                  <Text strong>Route:</Text> {formData.route}
                </li>
                <li>
                  <Text strong>Frequency:</Text> {formData.frequency}
                </li>
                <li>
                  <Text strong>Duration:</Text> {formData.duration}
                </li>
                {/* Add other fields as needed */}
              </ul>
            )}
          </Modal>
        </Col>
      </Row>
    </PageLayout>
  );
};

export default PrescribingPage;
