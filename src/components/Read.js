// Component Fields
import Movies from "./Movies"
import { useEffect, useState } from "react";
import axios from "axios";

// Read content to be imported
const Read = () => {
    // using states we set movies - 'useState' allows functional components to use states
    const [movies, setMovies] = useState([]);

    // react hook synchronize with server api (fires on component loading)
    useEffect(() => {
        // asynchronous, works in the background to "fetch" json data via response
        axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872')
            .then((response) => {
                console.log(response.data);
                setMovies(response.data.movies)
            }) // callback function exectured when fullfilled or an error is thrown
            .catch((error) => {
                console.log(error)
            });
    }, []);

    return (
        <div>
            <h3>Hello from the Read component</h3>
            {/*Passing movie data from read to its child movies*/}
            <Movies myMovies={movies} />
        </div>
    );
};

// exporting module to be used in app.js
export default Read;