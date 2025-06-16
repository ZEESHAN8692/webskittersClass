import React, { useEffect, useState } from "react";
import axiosInstance from "../API/Axiosinstance";
import { profile_end } from "../API/Endpoints";
import base_url from "../API/Baseurl";

const Profile = () => {
  const [data, setData] = useState({});
  const { first_name, last_name, email, profile_pic } = data;

  const folderPath = "uploads/user/profile_pic/";
  const image = base_url + folderPath + profile_pic;
  console.log(image);
  useEffect(() => {
    axiosInstance
      .get(profile_end)
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <section
        className="w-100 px-4 py-5"
        style={{ backgroundColor: "#9de2ff", borderRadius: ".5rem .5rem 0 0" }}
      >
        <div className="row d-flex justify-content-center">
          <div className="col col-md-9 col-lg-7 col-xl-6">
            <div className="card" style={{ borderRadius: 15 }}>
              <div className="card-body p-4">
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <img
                      src={image}
                      alt="Generic placeholder image"
                      className="img-fluid"
                      style={{ width: 180, borderRadius: 10 }}
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="mb-1">
                      {first_name} {last_name}
                    </h5>
                    <p className="mb-2 pb-1">
                      <b>Email:-</b>
                      {email}
                    </p>
                    <p className="mb-2 pb-1"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
