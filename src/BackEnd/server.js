// class fields
const express = require('express');
const app = express();
const port = 4000;

// body-parser middleware to parse through content
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Cross-Origin Resource Sharing
// when browser connects to server, it's okay to accept requests outside domain
const cors = require('cors');
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// connecting to mongoose db14
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.ropg5.mongodb.net/DB14');

// creating a movie schema
const movieSchema = new mongoose.Schema({
    title: String,
    year: String,
    poster: String
  });

// added data model which is a blueprint for defining the structure of data within a MongoDB collection
const Movie = mongoose.model('Movie', movieSchema);

// creating a method to add new movie records
app.post('/api/movies', async (req, res) => {
    const { title, year, poster } = req.body; // fetching passed data
    const newMovie = new Movie({ title, year, poster }); // creating new movie object
    await newMovie.save(); // execute async while blocking code to not post movie created before movie was created

    res.status(201).json({ message: 'Movie created successfully', movie: newMovie });
})

// route fetches a specific movie by its ID
app.get('/api/movies/:id', async (req, res) => {
    let movie = await Movie.findById({ _id: req.params.id });
    res.send(movie);
});

// route updates a specific movie’s information in async and updates details in req.body
app.put('/api/movies/:id', async (req, res) => {
    let movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(movie);
});

// if we get a request, 'Welcome to Data Respresentation & Querying'
app.get('/api/movies', async(req, res) => {
    // all the movie data fetched async
    const movies = await Movie.find({}); // empty object {} means it fetches all objects in the database

    // give back respone in json format with status 200 'okay'
    res.status(200).json({movies})
});

// getting movie based on ID parameter which is passed via URL
app.get('/api/movie/:id', async (req, res) => {
    const movie = await Movie.findById(req.params.id); // searches movie collection for said ID
    res.send(movie); // sends back selected movie in JSON
});

// post request accepts data
app.post('/api/movies',(req,res) => {
    // logs movie object passed onto the server
    console.log(`Title: ${req.body.title}, Year: ${req.body.year}, Poster: ${req.body.poster}`);

    // telling client movie has been added
    res.send("Movies Added!");
})

// handles deleting of movies on server side
app.delete('/api/movie/:id', async (req, res) => {
  
    console.log('Deleting movie with ID:', req.params.id);
    const movie = await Movie.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Movie deleted successfully", movie });
});

// severs listens for a http request coming in
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

/*
[
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        }
    ]
*/