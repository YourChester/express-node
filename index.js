const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');

const Rhome = require('./routes/home');
const Rabout = require('./routes/about');

const FOLDER_HTML = 'views';
const PORT = process.env.port || 3000;

const app = express();
const hbs = handlebars.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

app.use('/', Rhome);
app.use('/about', Rabout);



app.listen(PORT, () => {
  console.log('Server starting...');
});