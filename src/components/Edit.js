
// imports
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Edit(props) {
    let { id } = useParams(); //React Hook allows to access the dynamic parameters of the current route.
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [poster, setPoster] = useState("");
    const navigate = useNavigate(); // hook returns a function that enables navigation to different routes programmatically

    // hooks event, updates information when component mounts or updates
    useEffect(() => {
        // fetches specific movie data from ID
        axios.get('http://localhost:4000/api/movies/' + id)
            .then((response) => {
                // sets pages interface data
                setTitle(response.data.title);
                setYear(response.data.year);
                setPoster(response.data.poster);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault(); // prevents text boxes from being blank
        const newMovie = { id, title, year, poster };
        axios.put('http://localhost:4000/api/movies/' + id, newMovie) /* Pushing data up async */
            .then((res) => {
                console.log(res.data);
                navigate('/read'); {/* once submitted lets move back to read page*/}
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Movie Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} /> {/*changing var dynamically using user params*/}
                </div>
                <div className="form-group">
                    <label>Edit Movie Year: </label>
                    <input type="text"
                        className="form-control"
                        value={year}
                        onChange={(e) => setYear(e.target.value)} /> {/*changing var dynamically using user params*/}
                </div>
                <div className="form-group">
                    <label>Edit Movie Poster: </label>
                    <input type="text"
                        className="form-control"
                        value={poster}
                        onChange={(e) => setPoster(e.target.value)} /> {/*changing var dynamically using user params*/}
                </div>
                <div className="form-group">
                    <input type="submit" value="Edit Movie" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}