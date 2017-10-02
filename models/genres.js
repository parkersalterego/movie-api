let mongoose = require('mongoose');

// genre schema

let genreSchema = mongoose.Schema({
    name: {
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

module.exports.getGenres = function(callback, limit){
    Genre.find(callback).limit(limit);
}