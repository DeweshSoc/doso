const Class = require("../models/class");

exports.getClass=(req,res)=>{
    const classId = req.params.classId;
    Class.findById(classId)
    .then(cls=>{
        if(!cls){
            res.redirect("/error/class404");
        }
        res.render("classes/class",{
            cls:cls
        });
    })
}