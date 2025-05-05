import React, { useState } from "react";

const MyForm = () => {
  const [input, setInput] = useState({
    fname: "",
    contact: "",
    email: "",
    password: "",
  });

  const chnageHandle = (e) => {
    let { name, value } = e.target;
    setInput((prevIn) => ({
      ...prevIn,
      [name]: value,
    }));
  };
  const handleSub = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <>
      <div className="myformMain">
        <br />
        <form onSubmit={handleSub}>
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            placeholder="Name"
            name="fname"
            onChange={chnageHandle}
          />
          <br />
          <br />
          <label htmlFor="contact">Contact : </label>
          <input
            type="text"
            placeholder="Contact"
            name="contact"
            onChange={chnageHandle}
          />
          <br />
          <br />
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={chnageHandle}
          />
          <br />
          <br />
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            placeholder="Pasword"
            name="password"
            onChange={chnageHandle}
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default MyForm;
