const Database = require("../models/databasePathModel.js");
const path = require('path');


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

const getDatabase = async (req, res) => {
    const databaseFile = req.params.databaseFile;

    const dbDir = path.join('..', 'database_files')

    const options = {
        root: path.join(__dirname, dbDir)
    };

    res.sendFile(databaseFile, options, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Sent:', databaseFile);
        }
    });

}


module.exports = { getDatabasePath, getDatabase};
