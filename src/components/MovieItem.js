// Component imports
import { useEffect } from "react";
import { Card } from "react-bootstrap";

// MovieItem gets "props" data which contains 1 movie data 
// from parent Movies
const MovieItem = (props) => {
    // hooks event, logs props to the console whenever the component mounts or updates
    useEffect(() => {
        console.log("Movies:", props.myMovies);
    }, [props.myMovies]); // added dependacy arary as myMobies so it only runs if myMovies changes

    return (
        <div>
            <Card>
                {/*Creating Movie Image Card with bootstrap*/}
                <Card.Header>{props.mymovie.Title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.mymovie.Poster} alt={props.mymovie.Title} />
                        <footer>{props.mymovie.Year}</footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    );
}

// exporting module to be used in app.js
export default MovieItem;
