const {Router} = require('express');
const route = Router();

route.get(
  '/',
  (req, res) => {
    res.render('index', {
      home: true,
    });
  }
);

module.exports = route;