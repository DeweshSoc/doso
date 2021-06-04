//internal node packages
const path = require("path");

//external node packages
const express = require("express");

//module imports
const errorController = require("./controllers/erroController");

//app settings
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

//routers


//middlewares
app.use(express.static(path.join(__dirname,"public")));
app.use("/",errorController.error404NotFound);

const port = process.env.PORT;
app.listen(3000,result=>{
    console.log("Server on port 3000");
});