const {Customer} = require('../models/customer'); 
const express = require('express');
const router = express.Router();

router.get('/', async(req, res) =>{
  // res.render('index', { title: 'Home' });
  const customers = await Customer.find({});
   sess = req.session;
  res.render('index' , {
    email: sess.email, 
    customer : customers
    });
  
});


  router.get('/images-list',  async (req, res) => {
    sess = req.session;
    const customers = await Customer.find({})
    res.render('index' , {email: sess.email, customer : customers   });
  });
  

  router.get('/about-us', async(req, res) =>{
    //  res.render('about', { title: 'About' });
 sess = req.session;
    res.render('about' , {
      email: sess.email, 
      name : sess.name
      });
    
  });
   
  router.get('/login', async(req, res) =>{
    res.render('login', { title: 'Login' });
  
  });
  router.get('/forget', async(req, res) =>{
    res.render('forget', { title: 'forget' });
  
  });
  router.get('/signup', async(req, res) =>{
    res.render('signup', { title: 'signup' });
  });

  router.get('/services', async(req, res) =>{
    const customers = await Customer.find({});
    sess = req.session;
    if(sess.email) {
  
    res.render('services' , {
      email: sess.email, 
      customer : customers 
      });
    } else
    {
     
      res.redirect('/login')

    }

  });

  router.get('/logout',async(req, res) =>{
    req.session.destroy(function(err) {
      if(err) {
        console.log(err);
      } else {
        res.redirect('/');
      }
    }); 
    });

  module.exports = router;