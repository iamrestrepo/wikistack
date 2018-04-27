const express = require("express");
const router = express.Router();
const layout = require("../views/layout");

router.get("/add", (req, res, next) => {
  try {
    res.send("response");
  } catch {
    next();
  }
});

router.get("/", (req, res, next) => {
  try {
    res.send(layout());
  } catch {
    next();
  }
});

router.post("/", (req, res, next) => {
  try {
    res.send("response");
  } catch {
    next();
  }
});

module.exports = router;
