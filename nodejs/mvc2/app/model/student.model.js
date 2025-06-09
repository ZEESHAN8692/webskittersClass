const express = require("express");
const mongoose = require("mongoose");

const studentschema = mongoose.Schema;

const Studentschema = new studentschema({
  name: {
    type: String,
    require: [true, "name is Require"],
  },
  email: {
    type: String,
    require: [true, "email is Require"],
  },
  phone: {
    type: String,
    require: [true, "phone is Require"],
  },
  address: {
    type: String,
    require: [true, "address is Requuire"],
  },
});

const studentModel = mongoose.model("student", Studentschema);
module.exports = studentModel;
