// Importing React
import React from 'react';

// Content arrow function returns us the 'Content' for the content page
const Content = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      {/*.ToLocaleTimeString Method formats the date as a string*/}
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

// exporting module to be used in app.js
export default Content;