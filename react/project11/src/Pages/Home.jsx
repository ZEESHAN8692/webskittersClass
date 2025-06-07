import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import axiosInstance from "../Api/axiosInstance";
import { products_end } from "../Api/end_point";
import Sidebar from "../Components/Sidebar";
import CardCom from "../Components/CardCom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosInstance.get(products_end).then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  return (
    <>
      <Header />
      <div className="container-fluid">
        <Row>
          <Col sm={2}>
            <Sidebar />
          </Col>
          <Col sm={10}>
            <div className="row gap-3">
              {products.map((product) => (
                <CardCom key={product.id} product={product} />
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
