let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express();

Genre = require('./models/genres');
Movie = require('./models/movies');

// connect mongoose 
mongoose.connect('mongodb://localhost/movie-db');

app.get('/', function(req, res){
    res.send('use /api/genres or /api/movies');
});

app.get('/api/genres', function(req, res){
    Genre.getGenres(function(err, genres){
        if(err){
            throw err;
        }
        res.json(genres);
    });
});

app.get('/api/movies', function(req, res){
    Movie.getMovies(function(err, movies){
        if(err){
            throw err;
        }
        res.json(movies);
    })
})

app.listen(3000);
console.log('running on port 3000!');



