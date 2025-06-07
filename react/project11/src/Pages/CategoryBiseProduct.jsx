import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../Components/Sidebar";
import { useParams } from "react-router-dom";
import axiosInstance from "../Api/axiosInstance";
import { products_category_bise_end } from "../Api/end_point";
import CardCom from "../Components/CardCom";

const CategoryBiseProduct = () => {
  const { categoryName } = useParams();
  const [productCategoryBase, setProductCategoryBase] = useState([]);
  const api = products_category_bise_end + categoryName;
  console.log(api);
  useEffect(() => {
    axiosInstance.get(api).then((res) => {
      setProductCategoryBase(res.data.products);
      console.log(res.data.products);
    });
  }, [api]);
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
              {productCategoryBase?.map((product) => (
                <CardCom key={product.id} product={product} />
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CategoryBiseProduct;
