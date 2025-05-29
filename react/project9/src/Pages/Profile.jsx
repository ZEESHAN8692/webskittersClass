import React, { useEffect, useState } from "react";
import base_url from "../../Api/base_url";
import { profile_end } from "../../Api/end_point";
import axios from "axios";

const Profile = () => {
  const profileApiUrl = base_url + profile_end;
  const [data, setData] = useState({});
  const { first_name, last_name, email, profile_pic } = data.data;
  const folderPath = "uploads/user/profile_pic/";
  const image = base_url + folderPath + profile_pic;
  const getData = () => {
    axios
      .get(profileApiUrl, {
        headers: {
          "x-access-token": sessionStorage.getItem("token"),
          "Content-Type": "application/x-www-from-urlencoded",
        },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, [setData]);
  return (
    <>
      <img src={image} alt="" height={"200px"} />
      <h1>
        Name :- {first_name} {last_name}
      </h1>
      <h5>Email:- {email}</h5>
      <h5></h5>
      <h5></h5>
    </>
  );
};

export default Profile;
