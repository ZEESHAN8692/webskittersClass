import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Base_Url from "../Api/Base_Url";
import { Users_end } from "../Api/End_point";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Details = () => {
  const { id } = useParams();
  let apiUrl = Base_Url + Users_end + id;
  const [singleData, setSingleData] = useState({});
  const getSingleData = () => {
    axios
      .get(apiUrl)
      .then((res) => {
        setSingleData(res.data);
        console.log(res.data);
      })
      .then((err) => console.log("Error", err));
  };
  useEffect(() => {
    getSingleData();
  }, []);
  // useEffect(() => {
  //   getSingleData();
  // }, [singleData]);
  return (
    <>
      <div className="container m-auto mt-5">
        <Card>
          <Card.Header as="h5">{singleData.username}</Card.Header>
          <Card.Body>
            <Card.Title>{singleData.name}</Card.Title>
            <Card.Text>Email :- {singleData.email}</Card.Text>
            <Card.Text>Phone :- {singleData.phone}</Card.Text>
            <Card.Text>
              Address :- {singleData?.address?.street}
              {singleData?.address?.suite}
              {singleData?.address?.city}
            </Card.Text>
            <Card.Text>{singleData?.address?.pincode} </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Details;
