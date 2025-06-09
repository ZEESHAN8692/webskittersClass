const express = require("express");
const mongoose = require("mongoose");

const schema = mongoose.Schema;

const teacherSchema = new schema({
  name: {
    type: String,
    require: [true, "Name is Require"],
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
    require: [true, "address is Require"],
  },
});

const teacherModel = mongoose.model("teacher", teacherSchema);
module.exports = teacherModel;
