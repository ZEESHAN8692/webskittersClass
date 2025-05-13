import React, { useEffect, useState } from "react";
import axios from "axios";
import Base_Url from "../Api/Base_Url";
import { Posts_end } from "../Api/End_point";
const About = () => {
  const ApiUrl = Base_Url + Posts_end;
  const [apiResponse, setApiResponse] = useState([]);
  const [isError, setIsError] = useState("");
  // useEffect(() => {
  //   axios
  //     .get(ApiUrl)
  //     .then((res) => setApiResponse(res.data))
  //     .catch((error) => setIsError(error.message));
  // }, []);

  const GetData = async () => {
    try {
      const res = await axios(ApiUrl);
      setApiResponse(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };
  useEffect(() => {
    GetData();
  }, []);

  return (
    <div className="container">
      <h1 className="text-data">About Page </h1>
      <br />
      <br />
      {isError !== "" && <h2>{isError}</h2>}
      <div className="row gap-2">
        {apiResponse.map((data) => {
          const { id, title, body } = data;
          return (
            <div className="col-sm-3 mb-3 mb-sm-0" key={id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{title.slice(0, 30)}</h5>
                  <p className="card-text">{body.slice(0, 100)}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
