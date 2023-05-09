
const cors = require("cors");
const express = require('express');
const databasePathRoute = require("./routes/databasePath");

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', databasePathRoute);


const port = 1234
app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})
