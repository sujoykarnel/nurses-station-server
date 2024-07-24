// External imports
const express = require("express");
const router = express.Router();

//Internal imports
const User = require("../models/User");

// users signup
router.post("/signup", async (req, res) => {
  const user = req.body;
  const newUser = new User(user);
  await newUser
    .save()
    .then((savedUser) => {
      if (savedUser) {
        res.status(200).json({
          message: "User add successfully!",
        });
      } else {
        res.status(500).json({
          error: "There was a server side error.",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: "There was a server side error.",
      });
    });
});

module.exports = router;
