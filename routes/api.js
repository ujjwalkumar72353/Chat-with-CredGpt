const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");

router.post("/botresponse", userController.getResponse);

module.exports = router;
