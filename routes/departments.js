const express = require("express");
const departmetsController = require("../controllers/departments");
const router = express.Router();

router.get("/", departmetsController.getDepartemnts);

router.get("/:id", departmetsController.getDepartemntsId);

router.get("/:department_name", departmetsController.getDepartemntsByName);

module.exports = router;
