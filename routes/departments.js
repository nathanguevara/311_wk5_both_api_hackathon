const express = require("express");
const usersController = require("../controllers/departments");
const router = express.Router();

router.get("/", usersController.getDepartemnts);

router.get("/:id", usersController.getUserById);

router.get("/:first_name", usersController.getUserByFirstName);

module.exports = router;
