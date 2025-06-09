const express = require("express");
const mongoose = require("mongoose");

const schema = mongoose.Schema;
const managerSchema = new schema({
  name: {
    type: String,
    require: [true, "name is requre"],
  },
  email: {
    type: String,
    require: [true, "email is requre"],
  },
  phone: {
    type: String,
    require: [true, "phone is requre"],
  },
  address: {
    type: String,
    require: [true, "address is requre"],
  },
});

const managerModel = mongoose.model("manager", managerSchema);
module.exports = managerModel;
