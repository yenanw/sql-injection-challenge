const path = require('path');

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


module.exports = { getDatabase };
