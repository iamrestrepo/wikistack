const express = require('express');
const router = express.Router();
const layout = require("../views/wikipage");



router.get('/add',(req,res,next) => {
    try{
        res.send('You added something!!');
    }catch{
        next();
    }
});

router.get("/", (req,res,next) => {
        try{
        res.send(layout("something",'something'));
    }catch{
        next();
    }
});


router.post("/", (req, res, next) => {
  try {
    res.send("This is a post!!!");
  } catch {
    next();
  }
});



module.exports = router; 