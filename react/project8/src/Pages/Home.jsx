import React, { useEffect, useState } from "react";
import base_url from "../Api/base_url";
import { user_end } from "../Api/user_end";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const apiUrl = base_url + user_end;
  const navigater = useNavigate();
  const getUserData = () => {
    axios.get(apiUrl).then((res) => setData(res.data));
  };
  useEffect(() => {
    getUserData();
  }, [setData]);

  const addUser = () => {
    navigater("/add-user");
  };
  const showUser = (id) => {
    navigater(`/single-user/${id}`);
  };
  const updateUser = (id) => {
    navigater(`/update-user/${id}`);
  };
  return (
    <>
      <h2 className="text-center mt-5">User List</h2>

      <div className="container">
        <div className="mb-3 text-end">
          <button className="btn btn-success" onClick={addUser}>
            + Add User
          </button>
        </div>

        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, i) => {
              return (
                <tr key={user.id}>
                  <td>{i + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                  <td>{user.address}</td>
                  <td>
                    <button
                      className="btn btn-info btn-sm me-2"
                      onClick={() => showUser(user.id)}
                    >
                      Show
                    </button>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => updateUser(user.id)}
                    >
                      Update
                    </button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
