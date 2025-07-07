import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../Redux/Slice/RegistraionSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector(
    (state) => state.registration
  );
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    profile_pic: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("first_name", form.first_name);
    data.append("last_name", form.last_name);
    data.append("email", form.email);
    data.append("password", form.password);
    data.append("profile_pic", form.profile_pic);
    console.log(DataTransfer);
    dispatch(signupUser(data));
  };

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {success && <div>Registration successful!</div>}
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-5 p-4 border rounded shadow"
        style={{
          maxWidth: 400,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={form.first_name}
          onChange={handleChange}
          required
          className="form-control mb-3"
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={form.last_name}
          onChange={handleChange}
          required
          className="form-control mb-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="form-control mb-3"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="form-control mb-3"
        />
        <input
          type="file"
          name="profile_pic"
          accept="image/*"
          onChange={handleChange}
          className="form-control mb-3"
        />
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </>
  );
};

export default Signup;
