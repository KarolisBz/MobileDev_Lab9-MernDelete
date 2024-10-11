// Component imports
import { useEffect } from "react";

// MovieItem gets "props" data which contains 1 movie data 
// from parent Movies
const MovieItem = (props) => {
    // hooks event, logs props to the console whenever the component mounts or updates
    useEffect(() => {
        console.log("Movies:", props.myMovies);
    }, [props.myMovies]); // added dependacy arary as myMobies so it only runs if myMovies changes

    return (
        <div>
            {/*Creating Movie Image Card*/}
            <h3>{props.mymovie.Title}</h3>
            <p>{props.mymovie.Year}</p>
            <img src={props.mymovie.Poster}></img>
        </div>
    );
}

// exporting module to be used in app.js
export default MovieItem;
