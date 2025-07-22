import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const SingleUser = () => {
  const { id } = useParams();
  let { data: single } = useQuery({
    queryKey: ["user", id],
    queryFn: () => axios.get(`http://localhost:3000/user/${id}`),
  });
  console.log("Single User", single);
  return <div>{single?.data.name}</div>;
};

export default SingleUser;
