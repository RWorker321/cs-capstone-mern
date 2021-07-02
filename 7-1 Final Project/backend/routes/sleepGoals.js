const router = require('express').Router();
const SleepGoal = require('../models/sleepGoal.model');


router.route('/').get((req, res) => {
  SleepGoal.find()
    // return sleep goals in json format
    .then(sleepgoal => res.json(sleepgoal))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Handles http post request for adding new sleep goals
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  // create new instance of SleepGoal
  const newSleepGoal = new SleepGoal({
    username,
    description,
    duration,
    date,
  });

  // Saves new SleepGoal or logs error for bad request
  newSleepGoal.save()
  .then(() => res.json('Sleep Goal Added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

// Get request reading (findById) user _id from database
router.route('/:id').get((req, res) => {
  SleepGoal.findById(req.params.id)
    .then(sleepgoal => res.json(sleepgoal))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Delete request deleting (findById) user _id entry from database
router.route('/:id').delete((req, res) => {
    SleepGoal.findByIdAndDelete(req.params.id)
    .then(() => res.json('Sleep Goal Deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Post request updating (findById) user _id entry from database
router.route('/update/:id').post((req, res) => {
  SleepGoal.findById(req.params.id)
    .then(sleepgoal => {
      sleepgoal.username = req.body.username;
      sleepgoal.description = req.body.description;
      sleepgoal.duration = Number(req.body.duration);
      sleepgoal.date = Date.parse(req.body.date);

      sleepgoal.save()
        .then(() => res.json('Sleep Goal Updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;