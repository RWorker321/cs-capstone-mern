const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    // Finds all users from MongoDB database and returns promise in json. Catch status code 400 exception 
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Post request for adding adding data to database
router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    // Save new user to database and return message in json
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;