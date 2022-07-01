const express = require("express");
const employeesController = require("../controllers/addresses");
const router = express.Router();

router.get("/", employeesController.getAddress);

router.get("/:id", employeesController.getStreetName);

router.get("/:first_name", employeesController.getZip);

module.exports = router;
