const express = require("express");
const addressesController = require("../controllers/addresses");
const router = express.Router();

router.get("/", addressesController.getZip);

router.get("/:id", addressesController.getUserById);

router.get("/:first_name", addressesController.getUserByFirstName);

module.exports = router;
