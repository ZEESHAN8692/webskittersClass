import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import base_url from "./Api/base_url";
import { user_end } from "./Api/user_end";

function App() {
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
    // const err ={...input.error}
    // switch (name) {
    //   case "name":
    //       err.name = value.name >0
    //     break;

    //   default:
    //     break;
    // }
    setInput({ ...input, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(apiUrl, input)
      .then(() => alert("submit successfull"))
      .catch((err) => console.log("Error", err));

    console.log(input);
  };
  return (
    <>
      <div className="container" onSubmit={handleSubmit}>
        <form action="">
          <div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input
                type="name"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Zeeshan Khan"
                name="name"
                onChange={inputHandle}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Age
              </label>
              <input
                type="age"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Zeeshan Khan"
                name="name"
                onChange={inputHandle}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Gender
              </label>
              <input
                type="name"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Zeeshan Khan"
                name="gender"
                onChange={inputHandle}
                required
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Address
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
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
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
