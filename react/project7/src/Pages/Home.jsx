import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import base_url from "../Api/Base_Url";
import { category_end, product_end } from "../Api/End_Point";
import axios from "axios";

const Home = () => {
  const [category, setCategory] = useState({});

  const apiUrl = base_url + product_end + category_end;
  const getCategoryData = () => {
    axios
      .get(apiUrl)
      .then((res) => setCategory(res.data))
      .catch((err) => console.log("Error", err));
  };
  useEffect(() => {
    getCategoryData();
  }, [setCategory]);

  const data = category.categories;
  console.log(data);

  return (
    <>
      <ul className="nav nav-pills">
        {category?.categories.map((cat, index) => (
          <li className="nav-item" key={index}>
            <Link className="nav-link" to={`category/${cat}`}>
              {cat}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
