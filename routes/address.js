const express = require("express");
const usersController = require("../controllers/addresses");
const router = express.Router();

router.get("/", usersController.getAllUsers);

router.get("/:id", usersController.getUserById);

router.get("/:first_name", usersController.getUserByFirstName);

module.exports = router;