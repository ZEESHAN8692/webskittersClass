import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ReadUser = () => {
  const [data, setData] = useState([]);
  axios
    .get("http://localhost:3000/user")
    .then((res) => {
      setData(res.data);
    })
    .catch((eror) => {
      console.log(eror);
    });
  return (
    <>
      <ul>
        {data.map((item) => (
          <Link to={`/update-user/${item.id}`}>{item.name}</Link>
        ))}
      </ul>
    </>
  );
};

export default ReadUser;
