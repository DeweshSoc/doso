const express = require("express");

const router = express.Router();

const classController = require("../controllers/class");

router.get("/:classId",classController.getClass);
module.exports = router;
