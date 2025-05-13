import React from "react";
import { useParams } from "react-router-dom";
import Base_Url from "../Api/Base_Url";
import { Users_end } from "../Api/End_point";

const Details = () => {
  const { id } = useParams();
// let apiUrl=Base_Url+Users_end+id;
  return (
    <>
      <div>
        <h1>Details Page </h1>
        <h1>{id}</h1>
      </div>
    </>
  );
};

export default Details;
