const express = require("express");

// controller functions
const { getDatabase } = require("../controllers/databasePathController");

const router = express.Router();

router.get("/getDatabase/:databaseFile", getDatabase);


module.exports = router;
