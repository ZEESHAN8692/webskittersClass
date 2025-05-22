import React, { useEffect, useState } from "react";
import base_url from "../Api/base_url";
import { user_end } from "../Api/user_end";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [tableFilter, setTableFilter] = useState("");
  const apiUrl = base_url + user_end;
  const navigater = useNavigate();
  const getUserData = () => {
    axios.get(apiUrl).then((res) => setData(res.data));
  };
  useEffect(() => {
    getUserData();
  }, [setData, deleteUser, setTableFilter]);

  const addUser = () => {
    navigater("/add-user");
  };
  const showUser = (id) => {
    navigater(`/single-user/${id}`);
  };
  const updateUser = (id) => {
    navigater(`/update-user/${id}`);
  };
  function deleteUser(id) {
    const deleteUerApi = base_url + user_end + "/" + id;
    axios
      .delete(deleteUerApi)
      .then(() => {
        alert("Data Delete Successfull");
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }

  function handleFilter(e) {
    setTableFilter(e.target.value);
    console.log(tableFilter);
  }

  const sortedData = [...data].sort((a, b) => {
    if (tableFilter === "1") {
      return a.name.localeCompare(b.name);
    } else if (tableFilter === "2") {
      return a.address.localeCompare(b.address);
    } else if (tableFilter === "3") {
      a.age - b.age;
    }
    return 0;
  });
  return (
    <>
      <h2 className="text-center mt-5">User List</h2>

      <div className="container">
        <div className="mb-3 d-flex justify-content-between">
          <div>
            <select
              id="disabledSelect"
              className="form-select"
              style={{ width: "200px" }}
              onChange={handleFilter}
              name="filter"
              value={tableFilter}
            >
              <option value="">Filter</option>
              <option value="1">Name - A to Z </option>
              <option value="2">Address - A to Z</option>
              <option value="3">Age - 1 to 100 </option>
            </select>
          </div>
          <div>
            <button className="btn btn-success" onClick={addUser}>
              + Add User
            </button>
          </div>
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
            {sortedData.map((user, i) => {
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
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
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
