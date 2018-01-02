const nodemailer = require('nodemailer');
const emailExistence = require('email-existence');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'chauhandeep0211@gmail.com',
    pass: '%deepanshu02'
  },
  tls: { rejectUnauthorized: false }
});

var verification =  (email,callback)=>{

  emailExistence.check(email,(err,res)=>{
    if(err){
      return callback(false);
    }
    var mailOptions = {
      from: 'Deepanshu',
      to: email,
      subject: 'Testing mail services',
      text: 'Hey there'
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        callback(false);
      } else {
        callback(true);
      }
    });
  });
};

module.exports = {verification};
