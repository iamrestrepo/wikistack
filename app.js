const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan'); 
const app = express();
// const layout = require ('./views/layout'); 
const serve = require('express-static');
const {db} = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require("./routes/user");



app.use(morgan("dev"));
app.use('/wiki',wikiRouter);
app.use("/user", userRouter);


db.authenticate().then(() => {
  console.log("connected to the database");
});


app.get('/',(req,res) => {
    res.redirect('/wiki')
}); 


const initConnection = async () => {
    await db.sync({force:true});
    const PORT = 3000; 
    app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
    })
};



initConnection();
