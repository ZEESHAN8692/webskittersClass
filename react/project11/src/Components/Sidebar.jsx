import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../Api/axiosInstance";
import { category_list_end } from "../Api/end_point";

const Sidebar = () => {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    axiosInstance.get(category_list_end).then((res) => {
      setCategoryList(res.data);
      //   console.log(res.data);
    });
  }, []);

  return (
    <>
      <ul className="bg-primary">
        {categoryList?.map((category, index) => (
          <Link to={`/category/${category}`} key={index}>
            <li className="text-white">{category}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Sidebar;
