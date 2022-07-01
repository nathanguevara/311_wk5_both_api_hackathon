const express = require("express");
const departmentsController = require("../controllers/departments");
const router = express.Router();

router.get("/", departmentsController.getDepartments);

router.get("/:id", departmentsController.getDepartmentsId);

router.get("/:department_name", departmentsController.getDepartmentsByName);

module.exports = router;
