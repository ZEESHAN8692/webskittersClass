import React, { useEffect, useState } from "react";
import axios from "axios";
import { Users_end } from "../Api/End_point";
import Base_Url from "../Api/Base_Url.js";
import { Link } from "react-router-dom";

const User = () => {
  const ApiUrl = Base_Url + Users_end;
  const [apiData, setApiData] = useState([]);
  const getData = () => {
    axios
      .get(ApiUrl)
      .then((res) => setApiData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, [setApiData]);
  return (
    <>
      <br />
      <div className="row container m-auto">
        {apiData.map((data) => (
          <div className="col-sm-3 mb-3 mb-sm-0 gap-5 " key={data.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <br />
                <h5 className="card-title">{data.email}</h5>
                <br />
                <h5 className="card-title">{data.phone}</h5>
                <br />
                {/* <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p> */}
                <Link to={`/details/${data.id}`} className="btn btn-primary">
                  Show More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
    </>
  );
};

export default User;
