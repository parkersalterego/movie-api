let mongoose = require('mongoose');

// genre schema

let genreSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    create_date: {
        type: Date,
        default: Date.now
    }
});

// set and export model

let Genre = module.exports = mongoose.model('Genre', genreSchema);

// get genres

module.exports.getMovies = function(callback, limit){
    Genre.find(callback).limit(limit);
}