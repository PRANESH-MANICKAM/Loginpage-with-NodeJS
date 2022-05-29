import React, { useState } from "react";
import { Modal, Button, Form, Col, Row, Input } from "antd";
import "antd/dist/antd.min.css";
import axios from "axios";
import { Link } from "react-router-dom";

const TableSend = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const url = "http://localhost:3001/tablesend";
  const openModal = () => {
    setModalVisible(true);
  };
  const handleOk = () => {
    setModalVisible(false);
  };
  const handleCancle = () => {
    setModalVisible(false);
  };
  const onFinish = async (values) => {
    try {
      let tablesend = await axios.post(url, {
        Address: values.Address,
        BirthPlace: values.BirthPlace,
        College: values.College,
        Email: values.Email,
        Fullname: values.Fullname,
        Mobile: values.Mobile,
        Occupation: values.Occupation,
        Rollnumber: values.Rollnumber,
      });
      if (tablesend.status === 200) {
        alert("Stored in Database");
      }
    } catch (error) {
      console.log("tablesend_error==>", error);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Link to="/loginhome">LoginHome</Link>
      <br />
      <Link to="/contact">Contact</Link>
      <br />
      <Link to="/products">Products</Link>
      <br />
      <Link to="/login">Loginpage</Link>
      <br />
      <Link to="/tableshow">TableShow</Link>
      <br />
      <h1>You can open the modal , fill your details</h1>
      <br />
      <Button type="primary" onClick={openModal}>
        Open Table Form
      </Button>
      <Modal
        title="Table Form"
        visible={modalVisible}
        onOk={handleOk}
        onCancel={handleCancle}
      >
        <Form
          onFinish={onFinish}
          labelCol={{
            span: 10,
          }}
          wrapperCol={{
            span: 14,
          }}
        >
          <Row>
            <Col span={12}>
              <Form.Item
                label="Fullname"
                name="Fullname"
                rules={[
                  {
                    required: true,
                    message: "Enter Fullname",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Email"
                name="Email"
                rules={[
                  {
                    required: true,
                    message: "Enter Email",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Mobile"
                name="Mobile"
                rules={[
                  {
                    required: true,
                    message: "Enter Mobile Number",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Address"
                name="Address"
                rules={[
                  {
                    required: true,
                    message: "Enter Address",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Rollnumber"
                name="Rollnumber"
                rules={[
                  {
                    required: true,
                    message: "Enter Rollnumber",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="College"
                name="College"
                rules={[
                  {
                    required: true,
                    message: "Enter College",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Birth Place"
                name="BirthPlace"
                rules={[
                  {
                    required: true,
                    message: "Enter Birth Place",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Occupation"
                name="Occupation"
                rules={[
                  {
                    required: true,
                    message: "Enter Occupation",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item wrapperCol={{ offset: 10, span: 4 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default TableSend;
