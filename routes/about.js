const {Router} = require('express');
const route = Router();

const Massage = require('../models/message')

route.get(
  '/',
  (req, res) => {
    res.render('about', {
      about: true,
    });
  }
);

route.post(
  '/',
  async (req, res) => {
    const {email, message} = req.body
    const msg = new Massage(email, message)
    await msg.save()
    
    res.redirect('/about');
  }
);

module.exports = route;