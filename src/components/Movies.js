// Component Fields
import MovieItem from "./MovieItem";

// Movies content to be imported
// movie gets "props" data which contains myMovies data 
// from parent Read
const Movies = (props) => {
    return props.myMovies.map(
        (movie) => {
            return <MovieItem mymovie={movie} key={movie.imdbID}/>
        }
    )
}

// exporting module to be used in app.js
export default Movies;