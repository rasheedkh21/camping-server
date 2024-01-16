const mongoose = require("mongoose");

const usedCarSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    company: {
      type: String,
      ruquired: true,
    },
    cost: {
      type: String,
      required: true,
    },
    licence: {
      type: String,
      required: true,
    },
    people: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("usedCar", usedCarSchema);