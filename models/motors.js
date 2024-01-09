const mongoose = require("mongoose");

const motorsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    company: {
      type: String,
      required: true,
    },
    cost: {
      type: String,
      required: true,
    },
    licence: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Motors", motorsSchema);