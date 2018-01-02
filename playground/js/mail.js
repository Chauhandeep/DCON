var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'chauhandeep0211@gmail.com',
    pass: '%deepanshu02'
  },
  tls: { rejectUnauthorized: false }
});

var mailOptions = {
  from: 'Deepanshu',
  to: 'dcthegamer@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
