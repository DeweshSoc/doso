const User = require("../models/user");
const Class = require("../models/class");

exports.getHomePage = (req,res)=>{
    res.render("home/homepage");
}

exports.getBoard = (req,res)=>{
    req.user
      .populate({
        path: "classes.classId",
      })
      .execPopulate()
      .then((user) => {
        return user
          .populate({
            path: "classes.classId.owner",
          })
          .execPopulate();
      })
      .then((user) => {
        return user
          .populate({
            path: "enrolledClasses.classId",
          })
          .execPopulate();
      })
      .then((user) => {
        return user
          .populate({
            path: "enrolledClasses.classId.owner",
          })
          .execPopulate();
      })
      .then((user) => {
        res.render("home/board", {
          enrolledClasses: user.enrolledClasses,
          classes: user.classes,
        });
      });
}

exports.getClassCreate = (req,res)=>{
    res.render("home/add-class");
}

exports.postClassCreate = (req,res)=>{
    const className = req.body.className;
    const classSubject = req.body.classSubject;
    const classDescription = req.body.classDescription;
    const teachers = [];
    teachers.push({userId:req.user._id});
    const newClass = new Class({
        name:className,
        subject : classSubject,
        description:classDescription,
        students:[],
        teachers:teachers,
        owner:req.user._id
    });

    newClass.save()
    .then(result=>{
        const newCreatedClass = {
            classId:result._id
        }
        const user = req.user;
        user.classes.push(newCreatedClass);
        return user.save();
    })
    .then(result=>{
        console.log("Class created");
        res.redirect("/board");
    });
}

exports.getClassJoin = (req,res)=>{
    res.render("home/join-class");
}

exports.postClassJoin=(req,res)=>{
    const classId = req.body.classId;
    Class.findOne({_id:classId})
    .then(cls=>{
        if(!cls){
            res.redirect("/error/class404");
        }
        cls.students.push({
            userId:req.user._id
        });
        return cls.save();
    })
    .then(result=>{
        req.user.enrolledClasses.push({
            classId:result._id
        });
        return req.user.save();
    })
    .then(result=>{
        res.redirect("/board");
    })
    .catch(err=>{console.log(err)});
    
}