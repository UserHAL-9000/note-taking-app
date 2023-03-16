// installed
// npm i -y
// npm install express
// npm init
// npm jest
// npm uniqid

// Dependencies
const express = require('express')
const path = require('path')

// Sets up the Express App
const app = express()
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());

// Tells html page to start in public folder when looking for images etc.
app.use(express.static(path.join(__dirname + '/app/public')));
 
// including route files(html-routes.js and api-routes.js) in server
// Always have the api-route before the html-routes since this data must display on to the html pages
require("./app/routing/api-routes.js")(app);

require("./app/routing/html-routes.js")(app);



app.listen(PORT, function(){
    console.log('App listening on PORT: ' + PORT)
  });
  
  
  
  