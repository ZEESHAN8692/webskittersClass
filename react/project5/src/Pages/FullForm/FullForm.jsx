import React, { useState } from "react";

const FullForm = () => {
  const [inputVal, setInputVal] = useState({
    fname: "",
    lname: "",
    username: "",
    city: "",
    state: "",
    zip: "",
    error: {
      fname: "",
      lname: "",
      username: "",
      city: "",
      zip: "",
    },
  });

  const [singleImg, setSingleImg] = useState();
  const [multipleImg, setMultipleImg] = useState();
  const [agree, setAgree] = useState(false);
  const [checkStudent, setCheckStudent] = useState(false);

  const changeHandle = (e) => {
    let { name, value } = e.target;
    let err = { ...inputVal.error };
    switch (name) {
      case "fname":
        err.fname = value.length < 3 ? "Full Name length at least 3 Char" : "";
        break;
      case "lname":
        err.lname = value.length < 3 ? "Last Name length at least 3 Char" : "";
        break;
      case "username":
        err.username =
          value.length < 4 ? "Username length at least 4 Char" : "";
        break;
      case "city":
        err.city = value.length < 4 ? "city length at least 4 Char" : "";
        break;
      case "zip":
        err.zip = value.length < 5 ? "ZIP Code length max 6 Number" : "";
        break;
      default:
        break;
    }

    setInputVal({ ...inputVal, [name]: value, error: err });
  };
  const SingleImageHandle = (e) => {
    setSingleImg(e.target.files[0]);
  };

  const multipleImgHandle = (e) => {
    setMultipleImg(e.target.files);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    console.log(inputVal);
    console.log(singleImg);
    console.log(multipleImg);
    console.log(agree === true ? "Terms Agree Selected" : "");
    console.log(checkStudent === true ? "Student" : "Not Student");
  };

  return (
    <>
      <h1 className="text-center">Full Form </h1>
      <div className="container">
        <form
          className="row g-3 needs-validation"
          noValidate
          onSubmit={submitHandle}
        >
          <div className="col-md-4 position-relative">
            <label htmlFor="validationTooltip01" className="form-label">
              First name
            </label>
            <input
              type="text"
              required={true}
              className={`form-control ${
                inputVal.error.fname.length ? "is-invalid" : ""
              }`}
              id="validationTooltip01 "
              placeholder="Zeeshan"
              name="fname"
              onChange={changeHandle}
            />
            {/* <div className="valid-tooltip">Looks good!</div> */}
            <div className="invalid-tooltip">{inputVal.error.fname}</div>
          </div>
          <div className="col-md-4 position-relative">
            <label htmlFor="validationTooltip02" className="form-label">
              Last name
            </label>
            <input
              type="text"
              required
              className={`form-control ${
                inputVal.error.lname.length > 0 ? "is-invalid" : ""
              }`}
              id="validationTooltip02"
              placeholder="Khan"
              name="lname"
              onChange={changeHandle}
            />
            <div className="invalid-tooltip">{inputVal.error.lname}</div>
          </div>
          <div className="col-md-4 position-relative">
            <label htmlFor="validationTooltipUsername" className="form-label">
              Username
            </label>
            <div className="input-group has-validation">
              <span
                className="input-group-text"
                id="validationTooltipUsernamePrepend"
              >
                @
              </span>
              <input
                type="text"
                required
                className={`form-control ${
                  inputVal.error.username.length > 0 ? "is-invalid" : ""
                }`}
                id="validationTooltipUsername"
                aria-describedby="validationTooltipUsernamePrepend"
                placeholder="ZEESHAN"
                name="username"
                onChange={changeHandle}
              />

              <div className="invalid-tooltip">{inputVal.error.username}</div>
            </div>
          </div>
          <div className="col-md-6 position-relative">
            <label htmlFor="validationTooltip03" className="form-label">
              City
            </label>
            <input
              type="text"
              required
              className={`form-control ${
                inputVal.error.city.length > 0 ? "is-invalid" : ""
              }`}
              id="validationTooltip03"
              placeholder="Bareilly"
              name="city"
              onChange={changeHandle}
            />
            <div className="invalid-tooltip">{inputVal.error.city}</div>
          </div>
          <div className="col-md-3 position-relative">
            <label htmlFor="validationTooltip04" className="form-label">
              State
            </label>
            <select
              className="form-select"
              id="validationTooltip04"
              name="state"
              value={inputVal.state}
              onChange={changeHandle}
              required
            >
              <option selected disabled value>
                Select
              </option>
              <option>UP</option>
              <option>UK</option>
              <option>WB</option>
            </select>
            {/* <div className="invalid-tooltip">Please select a valid state.</div>s */}
          </div>
          <div className="col-md-3 position-relative">
            <label htmlFor="validationTooltip05" className="form-label">
              Zip
            </label>
            <input
              type="text"
              required
              className={`form-control ${
                inputVal.error.zip.length > 0 ? "is-invalid" : ""
              }`}
              id="validationTooltip05"
              placeholder="243202"
              name="zip"
              onChange={changeHandle}
            />
            <div className="invalid-tooltip">{inputVal.error.zip}</div>
          </div>
          <br />

          <div className="col-md-6 position-relative">
            <label htmlFor="validationTooltip01" className="form-label">
              Upload Single Image
            </label>
            <input
              type="file"
              required={true}
              className={`form-control  `}
              id="validationTooltip01 "
              name="singleImg"
              onChange={SingleImageHandle}
            />
            {/* <div className="invalid-tooltip">{inputVal.error.fname}</div> */}
          </div>
          <div className="col-md-6 position-relative">
            <label htmlFor="validationTooltip02" className="form-label">
              Upload Multiple Images
            </label>
            <input
              type="file"
              required
              className={`form-control `}
              id="validationTooltip02"
              placeholder="Khan"
              name="multipleImg"
              multiple
              onChange={multipleImgHandle}
            />
            <div className="invalid-tooltip">{inputVal.error.lname}</div>
          </div>

          <div className="d-flex gap-5">
            <div className="form-check">
              <input
                className={`form-check-input ${agree ? "" : "is-invalid"}`}
                type="checkbox"
                defaultValue
                id="invalidCheck"
                required
                onChange={() => setAgree((prev) => !prev)}
              />
              <label className="form-check-label" htmlFor="invalidCheck">
                Agree to terms and conditions
              </label>
              {agree ? null : (
                <div className="invalid-feedback">
                  You must agree before submitting.
                </div>
              )}
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                id="invalidCheck"
                required
                onChange={() => setCheckStudent((prev) => !prev)}
              />
              <label className="form-check-label" htmlFor="invalidCheck">
                Check if you are Student
              </label>
            </div>
          </div>

          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FullForm;
