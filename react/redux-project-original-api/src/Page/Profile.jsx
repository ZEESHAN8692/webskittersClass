import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserProfile } from "../Redux/Slice/ProfileSlice";
import base_url from "../Api/apiUrl";

const Profile = () => {
  const dispatch = useDispatch();
  const { error, data, loading } = useSelector((state) => state.profile);
  useEffect(() => {
    dispatch(UserProfile());
  }, [dispatch]);
  console.log("Api Data", data);
  return (
    <>
      {error && <p>{error}</p>}
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
                      src={`${base_url}uploads/user/profile_pic/${data.data?.profile_pic}`}
                      alt="Generic placeholder image"
                      className="img-fluid"
                      style={{ width: 180, borderRadius: 10 }}
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="mb-1">{data.data?.first_name}</h5>
                    <p className="mb-2 pb-1">Email :-{data.data?.email} </p>
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
