import React, { useState } from "react";

const HForm = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zipcode: "",
  });
  const changeHandleValue = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const submitHandle = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };
  return (
    <>
      <div className="container main">
        <form className="row g-3 text-white" onSubmit={submitHandle}>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              name="email"
              placeholder="zeeshan@gmail.com"
              onChange={changeHandleValue}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              name="password"
              placeholder="Zeeshan@123"
              onChange={changeHandleValue}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main Bareilly"
              name="address"
              onChange={changeHandleValue}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">
              Address 2
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
              name="address2"
              onChange={changeHandleValue}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              City
            </label>

            <input
              type="text"
              className="form-control"
              id="inputCity"
              name="city"
              placeholder="Bareilly"
              onChange={changeHandleValue}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              State
            </label>
            <input
              type="text"
              className="form-control"
              id="inputState"
              name="state"
              placeholder="Uttar Pradesh"
              onChange={changeHandleValue}
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">
              Zip
            </label>
            <input
              type="text"
              className="form-control"
              id="inputZip"
              name="zipcode"
              placeholder="243202"
              onChange={changeHandleValue}
            />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default HForm;
