
require('dotenv').config();
const cors = require("cors");
const express = require('express');
const mongoose = require('mongoose');

const mongoString = process.env.MONGO_URI;
const databasePathRoute = require("./routes/databasePath");

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', databasePathRoute);


const port = 1234
app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})
