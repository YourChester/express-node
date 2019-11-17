const {Router} = require('express');
const route = Router();

const Massage = require('../models/message')

route.get(
  '/',
  async (req, res) => {
    const messages = await Massage.getAll()
    res.render('about', {
      about: true,
      messages,
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