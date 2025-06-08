import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import axiosInstance from "../Api/axiosInstance";
import { products_end, product_search_end } from "../Api/end_point";
import Sidebar from "../Components/Sidebar";
import CardCom from "../Components/CardCom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSerachQuery] = useState("");

  const apiUrl = searchQuery ? product_search_end + searchQuery : products_end;
  const handleSerch = (e) => {
    setSerachQuery(e.target.value);
    console.log(e.target.value);
  };

  const handleSort = (sort) => {
    const sortProduct = [...products];
    if (sort === 1) {
      sortProduct.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === 2) {
      sortProduct.sort((a, b) => a.price - b.price);
    } else if (sort === 3) {
      sortProduct.sort((a, b) => b.rating - a.rating);
    }
    setProducts(sortProduct);
  };

  useEffect(() => {
    axiosInstance.get(apiUrl).then((res) => {
      setProducts(res.data.products);
    });
  }, [apiUrl]);

  return (
    <>
      <Header />
      <div className="d-flex justify-content-around">
        <div>
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item onClick={() => handleSort(1)}>
              Alphabetical
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSort(2)}>Price</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSort(3)}>Rating</Dropdown.Item>
          </DropdownButton>
        </div>
        <div>
          <Form.Group className="mb-3" controlId="formBasicSerch">
            <Form.Control
              type="text"
              placeholder="Search Product"
              name="serch"
              onChange={handleSerch}
            />
          </Form.Group>
        </div>
      </div>
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
