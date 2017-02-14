// grab the dependencies
const express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  expressLayouts = require('express-ejs-layouts');
  mongoose = require('mongoose');

// configure the application
// tell express where to look for static assets
app.use(express.static(__dirname + '/public'));

// set ejs as the templating engine
app.set('view engine', 'ejs');
app.use(expressLayouts);

//Connect to mlab database
// mongoose.connect('process.env.DB_URI'); (env not working??)
mongoose.connect('mongodb://bengitscode:deovolente@ds059135.mlab.com:59135/heroku_m8dvgp9b');

// set the routes
app.use(require('./app/routes'));

// start the server
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
