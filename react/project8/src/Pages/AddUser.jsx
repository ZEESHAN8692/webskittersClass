import React from "react";
import { useState } from "react";
import axios from "axios";
import base_url from "../Api/base_url";
import { user_end } from "../Api/user_end";
import { useNavigate } from "react-router-dom";

export const AddUser = () => {
  const navigater = useNavigate();
  const apiUrl = base_url + user_end;
  const [input, setInput] = useState({
    name: "",
    age: "",
    gender: "",
    address: "",
    error: {
      name: "",
      age: "",
    },
  });
  const inputHandle = (e) => {
    const { name, value } = e.target;
    let err = { ...input.error };
    switch (name) {
      case "name":
        err.name = value.length < 4 ? "Name must be at least 4 characters" : "";
        break;
      case "age":
        err.age = value < 18 ? "Age must be at least 18" : "";
        break;
      default:
        break;
    }

    setInput({ ...input, [name]: value, error: err });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(apiUrl, input)
      .then(() => {
        alert("submit successfull");
        navigater("/");
      })
      .catch((err) => console.log("Error", err));
  };
  return (
    <>
      <br />
      <h1 className="text-center">Add User </h1>
      <div className="container" onSubmit={handleSubmit}>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Zeeshan Khan"
              name="name"
              onChange={inputHandle}
              required
            />
            {input.error.name && (
              <small style={{ color: "red" }}>{input.error.name}</small>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="number"
              className="form-control"
              id="age"
              placeholder="Age"
              name="age"
              onChange={inputHandle}
              required
            />
            {input.error.age && (
              <small style={{ color: "red" }}>{input.error.age}</small>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <input
              type="text"
              className="form-control"
              id="gender"
              placeholder="Gender"
              name="gender"
              onChange={inputHandle}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <textarea
              className="form-control"
              id="address"
              rows={3}
              name="address"
              placeholder="Address"
              onChange={inputHandle}
              required
            />
          </div>

          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
