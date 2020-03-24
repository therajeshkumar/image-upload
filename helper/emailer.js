var nodemailer = require('nodemailer');
var EMD = {};
module.exports = EMD;
EMD.dispatchMail = function(email, password){
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'teamemailer18@gmail.com',
      pass: 'India@12345'
    }
  });
  debugger
  var mailOptions = {
    from: 'teamemailer18@gmail.com',
    to: email,
    subject: 'Test Mail',
    html: `
    Hi, 
    <br> 
    
    <p> Your temprary password is ${password} </p>
    <p> <a href="#"> Click Me </a> for reset your password and update your profile </p>
    <br>
   
    `
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response+'\n'+mailOptions.to);
    }
  });  
}