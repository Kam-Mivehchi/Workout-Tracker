//rqurie mongoose
const mongoose = require('mongoose');

//make mongoose schema
const Schema = mongoose.Schema;




//model
const workoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now,
    },

    exercises: [
        {
            type: {

                type: String,
                required: true,
            },
            name: {

                type: 'string',
                required: true,
            },
            duration: {
                type: Number,
                required: true,
            },

            //not included in all seed data therefore it is not required
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            }

        }]



},
    {
        toJSON: {
            virtuals: true
        }
    }
);

workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});





const Workouts = mongoose.model("Workout", workoutSchema);

module.exports = Workouts;
