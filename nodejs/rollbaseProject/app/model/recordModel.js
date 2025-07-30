const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecordSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

  
  },
  {
    timestamps: true,
  }
);

const RecordModel = mongoose.model("record", RecordSchema);
module.exports = RecordModel;
