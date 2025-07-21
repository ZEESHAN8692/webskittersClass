import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const RQUser = () => {
  const fetchUser = async () => axios.get("http://localhost:3000/user");
  const { isLoading, data, isError, error, isFetching } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });
  console.log(data?.data);
  //   let { isLoading, data, isError, error, isFetching } = response;

  //   console.log("React Query Result ", response);

  return (
    <>
      {isLoading && <h1>Loading ...</h1>}
      {isError && <h1>Error {error}</h1>}
      <ul>
        {data?.data.map((user, i) => (
          <li key={i}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default RQUser;
