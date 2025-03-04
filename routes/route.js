const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");

router.get("/", userController.renderChat);
router.get("/", userController.renderChat);

module.exports = router;
