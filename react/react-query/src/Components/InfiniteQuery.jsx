import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchData = async ({ pageParam = 1 }) => {
  const response = await axios.get(
    `http://localhost:3000/user?_page=${pageParam}&_per_page=2`
  );
  return response;
};

const InfiniteQuery = () => {
  const { isLoading, isError, error, data, fetchNextPage } = useInfiniteQuery({
    queryKey: ["user"],
    queryFn: fetchData,
    getNextPageParam: (lastPage, pages) => {
      if (pages.length < 3) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });
  console.log("data", data);
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <p>Error {error}</p>;
  return (
    <>
      {data?.pages.map((page, i) => (
        <ul key={i}>
          {page?.data?.data.map((user, i) => (
            <li key={i}>{user.name}</li>
          ))}
        </ul>
      ))}
      <button onClick={() => fetchNextPage()}>Load More</button>
    </>
  );
};

export default InfiniteQuery;
