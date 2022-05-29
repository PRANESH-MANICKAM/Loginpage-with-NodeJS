import React, { useState } from "react";
import { Table, Row, Col, Button, Form } from "antd";
import "antd/dist/antd.min.css";
import axios from "axios";
import { Link } from "react-router-dom";

const TableShow = () => {
  const [source, setSource] = useState([]);
  const fetchValues = async () => {
    try {
      let tabledata = await axios.post("http://localhost:3001/tableshow");
      setSource(tabledata.data.datas);
    } catch (error) {
      console.log("tableShow error==> ", error);
    }
  };
  const columns = [
    {
      title: "Fullname",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Birth Place",
      dataIndex: "BirthPlace",
      key: "BirthPlce",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile",
    },
  ];
  const data = source.map((values) => ({
    name: values.Fullname,
    BirthPlace: values.BirthPlace,
    mobile: values.Mobile,
  }));
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
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
      <Link to="/tableSend">TableSend</Link>
      <br />
      <Form>
        <Row>
          <Col span={24}>
            <Form.Item>
              <Table columns={columns} dataSource={data} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item wrapperCol={{ offset: 11, span: 4 }}>
              <h6>Make submit to see the user values</h6>
              <Button type="primary" onClick={fetchValues}>
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default TableShow;
