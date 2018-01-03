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

var verification =  (params,otp,callback)=>{

  var email = params.email;
  emailExistence.check(email,(err,res)=>{
    if(err){
      return callback(false);
    }
    var mailOptions = {
      from: 'Deepanshu',
      to: email,
      subject: 'DCONNECT Account Verification',
      html: `<p>Hello ${params.firstname},<br>OTP to verify your Account is <strong>${otp}</strong></p>`
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
