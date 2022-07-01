const express = require("express");
const usersController = require("../controllers/employees");
const router = express.Router();

router.get("/", usersController.getAllUsers);

router.get("/:employee_id", usersController.getUserById);

router.get("/:first_name", usersController.getUserByFirstName);

module.exports = router;
