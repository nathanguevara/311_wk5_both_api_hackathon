const express = require("express");
const employeesController = require("../controllers/addresses");
const router = express.Router();

router.get("/", employeesController.getAddress);

router.get("/:street", employeesController.getStreetName);

router.get("/:zip", employeesController.getZip);

module.exports = router;
