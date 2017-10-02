let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express();

Genre = require('./models/genres');

// connect mongoose 
mongoose.connect('mongodb://localhost/movie-db');

app.get('/', function(req, res){
    res.send('use /api/genres or /api/movies');
});

app.get('/api/genres', function(req, res){
    Genre.getGenres(function(err, genre){
        if(err){
            throw err;
        }
        res.json(genres);
    });
});

app.listen(3000);
console.log('running on port 3000!');



