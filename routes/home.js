const express = require("express");

const router = express.Router();

const homeController = require("../controllers/home");

router.get("/",homeController.getHomePage);

router.get("/board",homeController.getBoard);

router.get("/class/create",homeController.getClassCreate);

router.post("/class/create",homeController.postClassCreate);

router.get("/class/join",homeController.getClassJoin);

router.post("/class/join",homeController.postClassJoin);
module.exports = router;