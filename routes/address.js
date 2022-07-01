const express = require("express");
const addressesController = require("../controllers/addresses");
const router = express.Router();

<<<<<<< HEAD
router.get("/", addressesController.getZip);

router.get("/:id", addressesController.getUserById);

router.get("/:first_name", addressesController.getUserByFirstName);
=======
router.get("/", employeesController.getAddress);

router.get("/:id", employeesController.getStreetName);

router.get("/:first_name", employeesController.getZip);
>>>>>>> 8d7c58f7a13980a1ee014f0b405331fbf32301b0

module.exports = router;
