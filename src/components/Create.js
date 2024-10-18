import { useState } from "react";

// Read content to be imported
const Create = () => {
  // state var
  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault(); // stops from being fired more than once
    console.log(title);
  }

  return (
    <div>
      <h3>Hello from the Read Create component</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Add Movie Title: </label>
          <input type="text"
            className="form-control"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}></input>
        </div>
        <div>
          <input type="submit" value="Add Movie"></input>
        </div>
      </form>
    </div>
  );
}

// exporting module to be used in app.js
export default Create;