# CRUD REST API
I have created the following project as part of the Codecademy Back End Engineering carrer path. 
The project was created by following the tutorial [CRUD REST API with Node.js, Express, and PostgreSQL](https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/). 

## Pre Requisites
- A code editor
- PostgreSQL installed locally
- Node.js installed locally
- Basic understanding of JavaScript, Node.js, Express, and PostgreSQL

## Setting up the local database
The following brief steps below show what steps need to be taken for the source code to work. For a full description on how to set the project see the linked tutorial page. 
1. Install PostgreSQL locally
2. Connect to the postgres db using default username and password 
3. Create a new role with the permissions to create databases
4. Log into the new role and create a `users` table
5. Populate the table with some example users 

## Running the application
To get the app up and running follow the steps below. 
1. Complete the `Setting up the local database` section
2. Clone this repository using `git clone https://github.com/lukewelden/crud-rest-api`
3. Install the app dependancies by running the following command in the project root directory `npm install`
4. Run the app by running the following command within the project root directory `node index.js`

## APIs
Once the app is up and running you can interact with the below APIs 
- `GET: /` Displays homepage (json object)  
- `GET: /users` Get all users 
- `GET: /users/:id` Get user by id
- `POST: /users` Create a new user 
- `PUT: /users/:id` Update a user
- `DELETE: /users/:id` Delete a user

