// Movies content to be imported
// movie gets "props" data which contains myMovies data 
// from parent Read
const Read = (props) => {
    return(
        <div>
            <h3>Hello from the Movies component</h3>
            {console.log(props.myMovies)}
        </div>
    );
}

// exporting module to be used in app.js
export default Read;