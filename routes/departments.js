const express = require("express");
const employeesController = require("../controllers/departments");
const router = express.Router();

router.get("/", employeesController.getAllUsers);

router.get("/:id", employeesController.getUserById);

router.get("/:first_name", employeesController.getUserByFirstName);

module.exports = router;
