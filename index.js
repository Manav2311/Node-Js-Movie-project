const express = require("express");
const path = require('path')
const router = require("./routers/router");
const bodyParser = require("body-parser");
const {db} = require('./config/database');
const port = 8081 ;

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('node_modules'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

app.listen(port, (error) => {
  if (!error) {
    db();
    console.log("express connected at http://localhost:"+port);
    
  }
});
