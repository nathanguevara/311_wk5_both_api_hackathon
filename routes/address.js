const express = require("express");
const addressesController = require("../controllers/addresses");
const router = express.Router();

router.get("/", addressesController.getAddress);

router.get("/:street", addressesController.getStreetName);

router.get("/:zip", addressesController.getZip);

module.exports = router;
