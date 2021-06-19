exports.error404NotFound = (req,res)=>{
    res.render("errors/error-404");
}
exports.errorClassNotFound = (req,res)=>{
    res.render("errors/not-found",{
        errorMessage:"The class ID you entered does not match any existind class. Check again.",
        redirectLink:"/board",
        redirectName:"Go to dashboard"
    });
}