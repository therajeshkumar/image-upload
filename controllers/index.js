const {Customer} = require('../models/customer'); 
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Home' });
   sess = req.session;
  res.render('index' , {
    email: sess.email,  
    title: 'Home Page'
    });
  
});


  router.get('/images-list',  async (req, res) => {
    sess = req.session;
    const customers = await Customer.find({})
    res.render('index' , {email: sess.email, customer : customers   });
  });
  
  

  router.get('/about-us', function(req, res, next) {
    //  res.render('about', { title: 'About' });
 sess = req.session;
    res.render('about' , {
      email: sess.email,
      title: 'about Page'
      });
    
  });
   
  router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Login' });
  
  });

  router.get('/signup', function(req, res, next) {
    res.render('signup', { title: 'signup' });
  });

  router.get('/services', function(req, res, next){
    sess = req.session;
    if(sess.email) {
  
    res.render('services' , {
      email: sess.email,
      title: 'Services Page'
      });
    } else
    {
      res.write(' <h1>Access Denied ...</h1>  ');
     // next();
      //res.redirect('/login')

    }

  });

  router.get('/logout',function(req,res){
    req.session.destroy(function(err) {
      if(err) {
        console.log(err);
      } else {
        res.redirect('/');
      }
    }); 
    });

  module.exports = router;