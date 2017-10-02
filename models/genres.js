let mongoose = require('mongoose');

// genre schema

let movieSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    release: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    writers: {
        type: String,
        required: true,
    },
    cast: {
        type: String,
        required: true,
    },
    img_url: {
        type: String,
        required: true,
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

// set and export model

let Movie = module.exports = mongoose.model('Movie', movieSchema);

// get genres

module.exports.getMovies = function(callback, limit){
    Movie.find(callback).limit(limit);
}