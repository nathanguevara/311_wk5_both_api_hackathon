const express = require("express");
const usersController = require("../controllers/employees.js");
const router = express.Router();

router.get("/", employeesController.getEmployees);

router.get("/:employee_id", employeesController.getEmployeesById);

router.get("/:first_name", employeesController.getEmployeesByFirstName);

module.exports = router;
