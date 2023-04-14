const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


// const streckRoutes = require("./routes/streck");
// const userRoutes = require("./routes/user");
// const healthRoute = require("./routes/health");

const app = express();
app.use(cors())

var allowedOrigins = ['http://localhost:3000'];
// app.use(cors({
//   origin: function(origin, callback){
//     // allow requests with no origin 
//     // (like mobile apps or curl requests)
//     if(!origin) return callback(null, true);
//     if(allowedOrigins.indexOf(origin) === -1){
//       var msg = 'The CORS policy for this site does not ' +
//                 'allow access from the specified Origin.';
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   },
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));

const port = process.env.PORT || 5000;

app.use(express.json());
// app.use('/',dbRoute);

mongoose.set("strictQuery", false);

const uri = "mongodb://admin:admin@localhost:27017/?retryWrites=true&authSource=admin"
// connect to db
mongoose.connect(uri)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', port)
    })
  })
  .catch((error) => {
    console.log(error)
  })