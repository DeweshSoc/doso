const express = require("express");

const router = express.Router();

const errorController = require("../controllers/errorController");

router.get("/error/class404",errorController.errorClassNotFound);
router.get("/error/user404",errorController.errorUserNotFound);
module.exports = router;
