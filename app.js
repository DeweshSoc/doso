//internal node packages
const path = require("path");

//external node packages
const express = require("express");
const mongoose = require("mongoose");

//module imports
const errorController = require("./controllers/erroController");

//app settings
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

//dummy user 
app.use((req, res, next) => {
  User.findById("60c6549b9fd31a99f1a05c1f")
    .then((user) => {
      req.user = user; // this user is not just a js object is a full fledged mongoose model object with many functionalities
      next();
    })
    .catch();
});


//routers
const homeRoutes = require("./routes/home");
const authRoutes = require("./routes/auth");

//models
const User = require("./models/user");

//middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(homeRoutes);
app.use("/auth", authRoutes);
app.use(errorController.error404NotFound);

const port = process.env.PORT;

mongoose
  .connect(
    "mongodb+srv://dewesh-123:dewesh-123@cluster0.tn4nr.mongodb.net/dosoDB?retryWrites=true&w=majority",
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
