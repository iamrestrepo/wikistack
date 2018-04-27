const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan'); 
const app = express();
const serve = require('express-static');
app.use(morgan("dev"));


app.get("/",(req,res) => {
    res.send('hey, it is mE! ');
});

const PORT = 1337; 
app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
});




