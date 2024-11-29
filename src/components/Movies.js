// Component Fields
import MovieItem from "./MovieItem";

// Movies content to be imported
// movie gets "props" data which contains myMovies data 
// from parent Read
const Movies = (props) => {
    // Using map function to loop through each movie
    return props.myMovies.map(
        (movie) => {
            /*Sending each movie data to MovieItem to create a card with a unique KEY */
            return <MovieItem mymovie={movie} key={movie._id}  Reload={props.ReloadData}/>
        }
    )
}

// exporting module to be used in app.js
export default Movies;