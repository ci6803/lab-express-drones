const express = require("express");
const Drone = require("../models/Drone.model");
const router = express.Router();

// require the Drone model here

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find({})
    .then((allDrones) => res.render("drones/list", { allDrones }))
    .catch((error) => `Error while fetching all drones: ${error}`);
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;

  Drone.create({ name, propellers, maxSpeed })
    .then(() => res.redirect("/drones"))
    .catch((error) => `Error while creating a new drone: ${error}`);
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;

  Drone.findById(id)
    .then((droneEdit) => {
      res.render("drones/update-form", droneEdit);
    })
    .catch((error) => `Error while getting a drone to edit: ${error}`);
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then(() => res.redirect("/drones"))
    .catch((error) => console.log(`Error while updating a drone: ${error}`));
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;

  Drone.findByIdAndDelete(id)
    .then(() => res.redirect("/drones"))
    .catch((error) => console.log(`Error while deleting a drone: ${error}`));
});

module.exports = router;
