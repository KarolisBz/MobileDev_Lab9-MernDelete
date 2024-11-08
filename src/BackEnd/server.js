const express = require('express');
const app = express();
const port = 4000;

// if we get a request, 'Welcome to Data Respresentation & Querying'
app.get('/', (req, res) => {
    res.send('Hello World');
});

// severs listens for a http request coming in
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});