const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/contact", (req, res) => {
  res.send("<h1>Contact Page</h1>");
});
app.get("/menu", (req, res) => {
  res.send("<h1>Menu Page</h1>");
});
app.get("/product", (req, res) => {
  res.send("<h1>Product Page</h1>");
});

app.get("/user-data", (req, res) => {
  let user = [
    {
      id: 1,
      first_name: "Zeeshan",
      last_name: "Khan",
      email: "zeeshan@gmail.com",
      phone: 9568046912,
      password: "Zeeshan@123",
      address: {
        building_no: 552,
        village: "Bibiapur Chaudhary",
        city: "Bareilly",
        state: "UP",
        pincode: 243502,
      },
    },
    {
      id: 2,
      first_name: "Rehan",
      last_name: "Khan",
      email: "rehan@gmail.com",
      phone: 9568046912,
      password: "Reah@123",
      address: {
        building_no: 552,
        village: "Kesapur",
        city: "Bareilly",
        state: "UP",
        pincode: 243502,
      },
    },

    {
      id: 3,
      first_name: "Rehan",
      last_name: "Khan",
      email: "rehan@gmail.com",
      phone: 9568046912,
      password: "Reah@123",
      address: {
        building_no: 552,
        village: "Kesapur",
        city: "Bareilly",
        state: "UP",
        pincode: 243502,
      },
    },
    {
      id: 4,
      first_name: "Anis",
      last_name: "Ali",
      email: "anis@gmail.com",
      phone: 9568046912,
      password: "Anis@123",
      address: {
        building_no: 552,
        village: "Kolkata",
        city: "Kolkata",
        state: "UP",
        pincode: 541646,
      },
    },
    {
      id: 5,
      first_name: "Suman",
      last_name: "Das",
      email: "suman@gmail.com",
      phone: 5646645656,
      password: "Suman@123",
      address: {
        building_no: 538,
        village: "Kolkata",
        city: "Kolkata",
        state: "UP",
        pincode: 541646,
      },
    },
    {
      id: 6,
      first_name: "Deepika",
      last_name: "Rani",
      email: "deepika@gmail.com",
      phone: 46549644687,
      password: "Deepika@123",
      address: {
        building_no: 538,
        village: "Kolkata",
        city: "Kolkata",
        state: "UP",
        pincode: 541646,
      },
    },

    {
      id: 7,
      first_name: "Deepam",
      last_name: "Das",
      email: "dipam@gmail.com",
      phone: 85421544445,
      password: "deepam@123",
      address: {
        building_no: 538,
        village: "Kolkata",
        city: "Kolkata",
        state: "UP",
        pincode: 545135,
      },
    },

    {
      id: 8,
      first_name: "Rajeev",
      last_name: "Saw",
      email: "rajeev@gmail.com",
      phone: 8955686548,
      password: "rajeev@123",
      address: {
        building_no: 323,
        village: "Kolkata",
        city: "Kolkata",
        state: "UP",
        pincode: 545135,
      },
    },
    {
      id: 9,
      first_name: "Sanjeev",
      last_name: "Saw",
      email: "sanjeev@gmail.com",
      phone: 548654861,
      password: "sanjeev@123",
      address: {
        building_no: 366,
        village: "Kolkata",
        city: "Kolkata",
        state: "UP",
        pincode: 3466484,
      },
    },
    {
      id: 10,
      first_name: "sneha",
      last_name: "mondol",
      email: "sneha@gmail.com",
      phone: 35486548415,
      password: "sneha@123",
      address: {
        building_no: 653,
        village: "Kolkata",
        city: "Kolkata",
        state: "UP",
        pincode: 354346,
      },
    },
  ];

  res.send(user);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`successfull connect port ${PORT}`);
});
