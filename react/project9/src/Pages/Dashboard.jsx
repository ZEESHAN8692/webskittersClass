import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const loginUser = sessionStorage.getItem("name");
  const navigater = useNavigate();
  const token = sessionStorage.getItem("token");
  if (!token) {
    return navigater("/login-form");
  }
  const logout = () => {
    window.confirm("Are you sure");
    navigater("/login-form");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("token");
  };

  return (
    <>
      <div className="d-flex justify-content-end gap-5 align-items-center container">
        {loginUser && (
          <div>
            <h1>Hello , {loginUser}</h1>
          </div>
        )}

        <div>
          {token && (
            <Button variant="primary" onClick={logout}>
              Logout
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
