import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const RQUser = () => {
  const fetchUser = async () => axios.get("http://localhost:3000/user");
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });
  console.log(data?.data);
  //   let { isLoading, data, isError, error, isFetching } = response;
  //   console.log("React Query Result ", response);
  return (
    <>
      {isLoading && <h1>Loading ...</h1>}
      {isError && <p>Error {error}</p>}
      <ul>
        {data?.data.map((user, i) => (
          <Link to={`/user/${user.id}`} key={i}>
            <li>{user.name}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default RQUser;
