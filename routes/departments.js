const express = require("express");
const departmetsController = require("../controllers/departments");
const router = express.Router();

router.get("/", departmetsController.getDepartments);

router.get("/:id", departmetsController.getDepartmentsId);

router.get("/:department_name", departmetsController.getDepartmentsByName);

module.exports = router;
