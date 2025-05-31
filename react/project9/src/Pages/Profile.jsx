import React, { useEffect, useState } from "react";
import base_url from "../../Api/base_url";
import { profile_end } from "../../Api/end_point";
import axios from "axios";

const Profile = () => {

  const profileApiUrl = base_url + profile_end;
  const [data, setData] = useState({});
  console.log(data);
  const { first_name, last_name, email, profile_pic } = data;
  const folderPath = "uploads/user/profile_pic/";
  const image = base_url + folderPath + profile_pic;
  const getData = () => {
    axios
      .get(profileApiUrl, {
        headers: {
          "x-access-token": sessionStorage.getItem("token"),
          "Content-Type": "application/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
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
      <section className="h-100 gradient-custom-2">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center">
            <div className="col col-lg-9 col-xl-8">
              <div className="card">
                <div
                  className="rounded-top text-white d-flex flex-row"
                  style={{ backgroundColor: "#000", height: 200 }}
                >
                  <div
                    className="ms-4 mt-5 d-flex flex-column"
                    style={{ width: 150 }}
                  >
                    <img
                      src={image}
                      alt="Generic placeholder image"
                      className="img-fluid img-thumbnail mt-4 mb-2"
                      style={{ width: 150, zIndex: 1 }}
                    />
                  </div>
                  <div className="ms-3" style={{ marginTop: 130 }}>
                    <h5>
                      {first_name} {last_name}
                    </h5>
                    <p>New York</p>
                  </div>
                </div>
                <div className="p-4 text-black bg-body-tertiary">
                  <div className="d-flex justify-content-end text-center py-1 text-body">
                    <div>
                      <p className="mb-1 h5">253</p>
                      <p className="small text-muted mb-0">Photos</p>
                    </div>
                    <div className="px-3">
                      <p className="mb-1 h5">1026</p>
                      <p className="small text-muted mb-0">Followers</p>
                    </div>
                    <div>
                      <p className="mb-1 h5">478</p>
                      <p className="small text-muted mb-0">Following</p>
                    </div>
                  </div>
                </div>
                <div className="card-body p-4 text-black">
                  <div className="mb-5  text-body">
                    <p className="lead fw-normal mb-1">
                      <b>About</b>
                    </p>
                    <p>Email :- {email}</p>
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
