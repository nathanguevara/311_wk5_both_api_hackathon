const express = require("express");
const usersController = require("../controllers/employees");
const router = express.Router();

router.get("/employees", usersController.getEmployees);

router.get("/:employee_id", usersController.getEmployeesById);

router.get("/:first_name", usersController.getEmployeesByFirstName);

module.exports = router;
