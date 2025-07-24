import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

const fetchData = async (page) => {
  const response = await axios.get(
    `http://localhost:3000/user?_page=${page}&_per_page=10`
  );
  return response;
};
const Pagination = () => {
  const [page, setPage] = useState(1);
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["user", page],
    queryFn: () => fetchData(page),
  });
  console.log(data?.data);

  const changePage = (type) => {
    type === "prev" ? setPage(page - 1) : setPage(page + 1);
    page(+1);
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <p>Error {error}</p>;

  return (
    <>
      <ul>
        {data?.data?.data.map((user, i) => (
          <li key={i}>{user.name}</li>
        ))}
      </ul>
      <button onClick={() => changePage("prev")}>Prev</button>
      <button onClick={() => changePage("next")}>Next</button>
    </>
  );
};

export default Pagination;
