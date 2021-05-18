const express = require('express');
// bodyParser is invluded within express
const cors = require('cors');
const mongoose = require('mongoose');

// Configure env variables in dotenv file
require('dotenv').config();

// Create express server listens to port 5000
const app = express();
const port = process.env.PORT || 5000;

// cors middleware
app.use(cors());
// express.json allows us to parse json for sending/recieving
app.use(express.json());

// Database uri to MongoDB Atlas. Pass in URI
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

// Logs successful connection to MongoDB database
console.log(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// Requires route file and imports
const exercisesRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

// Loads schema for corresponding routing. Anytime user adds /exercies or /users, loads corresponding router
app.use('/exercises', exercisesRouter);
app.use('/users', userRouter);


// Starts the server and listens on port
// type: nodemon server within term to start server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});


