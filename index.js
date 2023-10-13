const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require('./queries');
const morgan = require('morgan');

// Express middleware setup
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(morgan('dev'));

// Express routes //
// Welcome message 
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API'})
});
// Get all users
app.get('/users', db.getUsers);
// Get a specific user
app.get('/users/:id', db.getUserById);
// Create a new user 
app.post('/users', db.createUser);
// Update a specific user
app.put('/users/:id', db.updateUser);
// Delete a specific user 
app.delete('/users/:id', db.deleteUser); 


// Start the Expess listening
app.listen(port, () => {
    console.log(`App running on port ${port}`)
});

