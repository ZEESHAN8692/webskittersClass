import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const fetchEmployeeById = async (id) =>
  axios.get(`http://localhost:3000/employee/${id}`);
const fetchDetailsByPosition = async (empPos) =>
  axios.get(`http://localhost:3000/userRoll/${empPos}`);

const DependentQuery = ({ id }) => {
  const { data: emp } = useQuery({
    queryKey: ["emp", id],
    queryFn: () => fetchEmployeeById(id),
  });
  const empPosition = emp?.data.roll;
  const { data: roll } = useQuery({
    queryKey: ["roll", empPosition],
    queryFn: () => fetchDetailsByPosition(empPosition),
    enabled: !!empPosition,
  });
  console.log(roll?.data);
  return <div>DependentQuery</div>;
};

export default DependentQuery;
