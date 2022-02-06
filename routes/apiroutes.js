//require model
const router = require('express').Router();
const Workout = require('../models/workout.js');

//get workout data
router.get('/api/workouts', (req, res) => {
    Workout.find()
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });

});

//post to workout daatabase
router.post("/api/workouts", ({ body }, res) => {
    Workout.create({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
});
router.get('/api/workouts/range', (req, res) => {
    Workout.find({}).limit(7)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});


//put route to edit workout by ID

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(params.id,
        { $push: { exercises: body } },
        { new: true, runValidators: true }
    )
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
});

router.delete("/api/workouts", ({ body }, res) => {
    Workout.findByIdAndDelete(body.id)
        .then(() => {
            res.json(true);
        })
        .catch(err => {
            res.json(err);
        })
});

module.exports = router;