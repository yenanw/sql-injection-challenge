const express = require("express");

// controller functions
const { getDatabasePath, getDatabase } = require("../controllers/databasePathController");

const router = express.Router();

router.get("/getDatabasePath/:challengeNumber", getDatabasePath);
router.get("/getDatabase/:databaseFile", getDatabase);


module.exports = router;
