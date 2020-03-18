const path = require('path');
const fs = require('fs');
var bodyParser = require('body-parser');
const {Customer} = require('../models/customer'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const multer= require('multer');
//const upload = multer ({ dest: 'uploads/' });

//let dir = "uploads";

const storage =  multer.diskStorage({
destination:  function (req, file, cb){
  cb(null, 'public/uploads');
},
filename:  function (req, file , cb){
  cb(null, file.originalname);

}
 });

const upload = multer ({ storage : storage });

// customers api

router.get('/', async (req, res) => {
  const customer = await Customer.find({})

  if (!customer) return res.status(404).send('The customer with the given ID was not found.');

  res.send(customer);
});

router.get('/:id', async (req, res) => {
  const customer = await Customer.findById(req.params.id);

  if (!customer) return res.status(404).send('The customer with the given ID was not found.');

  res.send(customer);
});

router.delete('/:id', async (req, res) => {
  const customer = await Customer.findByIdAndRemove(req.params.id);

  if (!customer) return res.status(404).send('Id was not found.');

  res.send(customer);
});

// router.post('/', upload.single('photo'), async (req, res) => {

//   let customer = new Customer({ 
//     name: req.body.name,
//     photo:req.file.filename
//   });

//   customer = await customer.save();
// res.send(customer);
// });

// render page
router.get('/images-list',  async (req, res) => {
  const customers = await Customer.find({});
  sess = req.session;
  res.render('index' , {  customer : customers   });
});


router.post('/', upload.single('photo'), async (req, res) => {

  let customer = new Customer({ 
    name: req.body.name,
    photo:req.file.filename
  });
  customer = await customer.save();
res.redirect('/services')

});


// router.delete('/delete', async (req, res) => {
//   const customer = await Customer.deleteMany(customers);

//   if (!customer) return res.status(404).send(' customer not found.');

//   res.send(customer);
// });



module.exports = router; 