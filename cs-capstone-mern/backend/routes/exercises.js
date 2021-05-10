const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
    // Finds all users from MongoDB database and returns promise in json. Catch status code 400 exception 
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Post request for adding exercise data to database
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });
    
    newExercise.save()
        .then(() => res.json('Exercise Added!'))
        .catch(() => res.status(400).json('Error: ' + err));
});

module.exports = router;