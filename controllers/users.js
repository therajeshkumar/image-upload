const  { User} = require('../models/user'); 

const express = require('express');

const router = express.Router();
const app = express();
router.post('/signup',async (req, res, err)=> {

    let user = await User.findOne({email: req.body.email});
    if(user){
       return res.status(400).send('User allready Registered');

    }
  
  user = new User({
  name : req.body.name,
  email : req.body.email,
  password : req.body.password,

  });

  user =await user.save();
  email.dispatchMail(req.body.email, req.body.password);
  res.redirect('/login');
});


router.post('/login',function(req,res){  
  var email = req.body.email;
  var password = req.body.password;
  User.findOne({email: email, password: password}, function (err, user) {
    if (err) {
      console.log(err);

    }
    if (!user) {
     res.send('invalid email and password');
     
    } else {
  sess=req.session;     
  sess.email=req.body.email;  

   res.redirect('/services');
    }
  })
});






router.get('/',  async (req, res) => {
  const users = await User.find().select('email password')
  res.send(users);
});

router.get('/:id', async (req, res) => {

  const user = await User.findById(req.params.id)
   
 
   if (!user) return res.status(404).send('The user not found.');
 
   res.send(user);
 });
 

module.exports = router;