const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;
const route = require('./routes');
//Static file
app.use(express.static(path.join(__dirname, 'public')));

//HTTP
//app.use(morgan('combined'));

//midaware
app.use(express.urlencoded({
  extended : true
}));
app.use(express.json());
//Template engine
app.engine('hbs', handlebars.engine({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resoures/views'));
console.log("PATH :",path.join(__dirname,'resoures/views'));

//Route init
route(app);
app.listen(port, () => {
  return console.log(`Example app listening on http://localhost:${port}/`)
 })

