const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Configure env variables in dotenv file
require('dotenv').config();

// Create express server
const app = express();
const port = process.env.PORT || 5000;

// cors middleware to parse JSON
app.use(cors());
// bodyParser include in express
app.use(express.json());

// Database uri to MongoDB Atlas. Pass in URI
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

console.log(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// 
const exercisesRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

// Loads schema for corresponding routing
app.use('/exercises', exercisesRouter);
app.use('/users', userRouter);


// Starts the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
