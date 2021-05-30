const router = require('express').Router();
const SleepJournal = require('../models/sleepJournal.model');

router.route('/').get((req, res) => {
  SleepJournal.find()
    .then(sleepjournal => res.json(sleepjournal))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newSleepJournal = new SleepJournal({
    username,
    description,
    duration,
    date,
  });

  newSleepJournal.save()
  .then(() => res.json('Sleep Journal Added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

// mongoDB variable 37:50
router.route('/:id').get((req, res) => {
  SleepJournal.findById(req.params.id)
    .then(sleepjournal => res.json(sleepjournal))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    SleepJournal.findByIdAndDelete(req.params.id)
    .then(() => res.json('Sleep Journal Deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  SleepJournal.findById(req.params.id)
    .then(sleepjournal => {
      sleepjournal.username = req.body.username;
      sleepjournal.description = req.body.description;
      sleepjournal.duration = Number(req.body.duration);
      sleepjournal.date = Date.parse(req.body.date);

      sleepjournal.save()
        .then(() => res.json('Sleep Journal Updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;