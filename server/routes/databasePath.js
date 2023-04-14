const express = require("express");

// controller functions
const { getDatabasePath } = require("../controllers/databasePathController");

const router = express.Router();

router.get("/getDatabasePath/:challengeNumber", getDatabasePath);

module.exports = router;
