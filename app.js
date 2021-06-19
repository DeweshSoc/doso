//internal node packages
const path = require("path");

//external node packages
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

//module imports
const errorController = require("./controllers/errorController");

//app settings
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

//dummy user 
app.use((req, res, next) => {
  User.findById("60cb522afcf7a9840974cc31")
    .then((user) => {
      req.user = user; // this user is not just a js object is a full fledged mongoose model object with many functionalities
      next();
    })
    .catch();
});


//routers
const homeRoutes = require("./routes/home");
const authRoutes = require("./routes/auth");
const classRoutes = require("./routes/class");

//models
const User = require("./models/user");

//middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));
app.use(homeRoutes);
app.use("/auth", authRoutes);
app.use("/c",classRoutes);
app.use(errorController.error404NotFound);

const port = process.env.PORT;

const MONGODB_URI = process.env.MONGODB_URI 
mongoose
  .connect(
    MONGODB_URI,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then((result) => {
    console.log("Connected to Database");
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "Dewesh",
          email: "deweshjha4@gmail.com",
          enrolledClasses: [],
          classes: [],
        });
        return user.save();
      }
      app.listen(3000, (req) => {
        console.log("Server Up at 3000");
      });
    });
  })
  .catch((err) => console.log(err));
