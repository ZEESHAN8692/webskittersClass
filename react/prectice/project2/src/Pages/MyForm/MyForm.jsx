import React, { useState } from "react";

const MyForm = () => {
  const [input, setInput] = useState({
    fname: "",
    address: "",
    error: {
      fname: "",
      address: "",
    },
  });
  const inpuChangeHandle = (e) => {
    const { name, value } = e.target;
    let err = { ...input.error };
    switch (name) {
      case "fname":
        err.fname = value.length < 3 ? "Name length at least 3 Char" : "";
        break;
      case "address":
        err.address =
          value.length < 10 ? "Address length at least 10 Char" : "";
        break;

      default:
        break;
    }
    setInput({ ...input, [name]: value, error: err });
  };
  const submitHandle = (e) => {
    e.preventDefault();

    const { fname, address, error } = input;
    if (!fname || !address) {
      return alert("Plese Fill All Input");
    }
    if (error.fname || error.address) {
      return alert("Validation Incorrect");
    }
    console.log(input);
  };
  return (
    <>
      <h1 className="text-center">Form</h1>
      <br />
      <div className="mr-auto container">
        <form onSubmit={submitHandle}>
          <label htmlFor="fname">Name :- </label>
          <input
            type="text"
            placeholder="name"
            name="fname"
            onChange={inpuChangeHandle}
          />
          {input.error.fname.length > 0 ? <p>{input.error.fname}</p> : null}
          <br />
          <br />
          <label htmlFor="address">Address :- </label>
          <input
            type="text"
            placeholder="Address"
            name="address"
            onChange={inpuChangeHandle}
          />
          {input.error.address.length > 0 ? <p>{input.error.address}</p> : null}
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default MyForm;
