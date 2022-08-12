const { mongoose } = require("mongoose");

// Iteration #1
//require("../db");
const { Schema, model } = mongoose;

const droneSchema = new Schema(
  {
    name: { type: String },
    propellers: { type: Number },
    maxSpeed: { type: Number },
  },
  { timestamps: true }
);

const Drone = mongoose.model("Drone", droneSchema);
module.exports = Drone;
