const express = require("express");

const router = express.Router();

const homeController = require("../controllers/home");

router.get("/",homeController.getHomePage);

router.get("/board",homeController.getBoard);

module.exports = router;