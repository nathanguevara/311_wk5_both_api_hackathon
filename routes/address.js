const express = require("express");
const addressesController = require("../controllers/addresses");
const router = express.Router();


router.get("/", addressesController.getZip);

router.get("/:id", addressesController.getUserById);

router.get("/:first_name", addressesController.getUserByFirstName);

router.get("/", employeesController.getAddress);

router.get("/:street", employeesController.getStreetName);

router.get("/:first_name", employeesController.getZip);

router.get("/:zip", employeesController.getZip);

module.exports = router;
