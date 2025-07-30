import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getUserById } from "../queryFunction/queryFunction";

const ShowData = ({ id }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserById(id),
  });
//   console.log("data", data?.data);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <>
      <div className="border p-4 m-4 rounded">
        <h3>{data?.data.name}</h3>
        <p>Quantity: {data?.data.quantity}</p>
        <p>Price: {data?.data.price}</p>
        <p>Description: {data?.data.description}</p>
      </div>
    </>
  )};

export default ShowData;
