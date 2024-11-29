// Component Fields
import Movies from "./Movies"
import { useEffect, useState } from "react";
import axios from "axios";

// Read content to be imported
const Read = () => {
    // using states we set movies - 'useState' allows functional components to use states
    // that work like globall vars but with extra computing in between if required
    const [movies, setMovies] = useState([]);

    // on reload fetch updated list
    const Reload = () => {
        console.log("Reloading movie data...");
         // asynchronous, works in the background to "fetch" json data via response
        axios.get('http://localhost:4000/api/movies')
        .then((response) => {
            console.log(response.data);
            setMovies(response.data.movies)
        }) // callback function exectured when fullfilled or an error is thrown
        .catch((error) => {
            console.log(error)
        });
    };

    // react hook synchronize with server api (fires on component loading)
    useEffect(() => {
        Reload();
    }, []); // table never changes, so only runs on page load

    return (
        <div>
            <h3>Hello from the Read component</h3>
            {/*Passing movie data from read to its child movies*/}
            <Movies myMovies={movies} ReloadData={Reload}/> {/*handelling reload*/}
        </div>
    );
};

// exporting module to be used in app.js
export default Read;