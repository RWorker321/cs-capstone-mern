const router = require('express').Router();
let User = require('../models/user.model');


// First endpoint for incoming http get request on /user url path. Catches bad request and logs error
router.route('/').get((req, res) => {
  // Mongoose methods find method returning promise that returns json
  User.find()
  // return users in json format
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Handles http post request for adding new users. 
router.route('/add').post((req, res) => {
  const username = req.body.username;

  // Create new instance of user
  const newUser = new User({username});

  // Saves new user or logs error for bad request
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;