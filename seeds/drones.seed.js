// Iteration #1
//require("../db");

const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

const dronesObj = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

const MONGO_URI = "mongodb://localhost/lab-express-drones";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log(`Connected to Mongo!`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

Drone.create(dronesObj)
  .then((results) => {
    console.log(`Created ${results.length} drones`);
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(`An error occurred while getting books from the DB: ${err}`)
  );
