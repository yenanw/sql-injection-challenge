const Database = require("../models/databasePathModel.js");

const getDatabasePath = async (req, res) => {
    const challengeNumber = parseInt(req.params.challengeNumber);
    const query = { challenge_number: challengeNumber };
    const databasePath = await Database.find(query, {database_file_path:1});

    if (!databasePath) {
        return res
            .status(404)
            .json({ error: "Something went wrong in getDatabasePath" });
    }
    res.status(200).json(databasePath);
};


module.exports = { getDatabasePath };
