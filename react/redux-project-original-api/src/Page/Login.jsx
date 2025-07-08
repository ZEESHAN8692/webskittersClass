import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../Redux/Slice/LoginSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, loading, error, success } = useSelector((state) => state.login);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data", form);
    dispatch(LoginUser(form));
  };

  useEffect(() => {
    if (success) {
      console.log(data.token, data.data.first_name);
      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("name", data.data.first_name);
      alert("Login Success");
      navigate("/profile");
    }
  }, [success, data]);

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
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

        <Link to="/login">If you have not Accout</Link>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
