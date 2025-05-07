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
    error: {
      email: "",
      password: "",
    },
  });
  const [img, setImg] = useState();
  const [mulImg, setMulImg] = useState();
  const changeHandleValue = (e) => {
    const { name, value } = e.target;
    // console.log(e.target.name, e.target.value);
    let err = { ...inputValue.error };
    switch (name) {
      case "email":
        err.email = value.length < 3 ? "min length 3 char" : "";
        break;
      case "password":
        err.password = value.length < 7 ? "min length 7 char" : "";
        break;
    }
    setInputValue({ ...inputValue, [name]: value, error: err });
  };
  // console.log(inputValue.error);

  const imgHandle = (e) => {
    // console.log(e.target.files[0]);
    setImg(e.target.files[0]);
  };

  const multipleImgHandle = (e) => {
    // console.log(e.target.files);
    setMulImg(e.target.files);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    console.log("Form Value : ", inputValue);
    console.log("Single Image : ", img);
    console.log("All Images : ", mulImg);
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
            {inputValue.error.email.length > 0 ? (
              <p>{inputValue.error.email}</p>
            ) : null}
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
            {inputValue.error.password.length > 0 ? (
              <p>{inputValue.error.password}</p>
            ) : null}
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
          <div className="col-12">
            <label htmlFor="inputFile" className="form-label">
              Upload Image
            </label>
            <input
              type="file"
              className="form-control"
              id="inputFile"
              placeholder="Apartment, studio, or floor"
              name="inputFile"
              onChange={imgHandle}
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputFile" className="form-label">
              Upload Multiple Images
            </label>
            <input
              type="file"
              className="form-control"
              id="inputFile"
              placeholder="Apartment, studio, or floor"
              name="inputFile"
              onChange={multipleImgHandle}
              multiple
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
