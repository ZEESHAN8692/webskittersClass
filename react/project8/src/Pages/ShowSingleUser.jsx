import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import base_url from "../Api/base_url";
import { user_end } from "../Api/user_end";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ShowSingleUser = () => {
  const navigater = useNavigate();
  const [data, setData] = useState({});
  const { id } = useParams();
  const apiUrl = base_url + user_end + "/" + id;

  const getSingleUser = () => {
    axios.get(apiUrl).then((res) => {
      setData(res.data);
    });
  };
  useEffect(() => {
    getSingleUser();
  }, [setData]);

  const forHome = () => {
    navigater("/");
  };
  return (
    <>
      <div className="container mt-4">
        <div
          className="card shadow"
          style={{ maxWidth: "400px", margin: "auto" }}
        >
          <div className="card-body">
            <h4 className="card-title text-center mb-3 text-bold">
              {data.name}
            </h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Age:</strong> {data.age}
              </li>
              <li className="list-group-item">
                <strong>Gender:</strong> {data.gender}
              </li>
              <li className="list-group-item">
                <strong>Address:</strong> {data.address}
              </li>
            </ul>
            <div className="mt-3 d-flex justify-content-between">
              <button className="btn btn-warning btn-sm" onClick={forHome}>
                Home
              </button>
              <button className="btn btn-warning btn-sm">Edit</button>
              <button className="btn btn-danger btn-sm">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowSingleUser;
