const path = require('path');
const express = require('express');
const random = require('random-number');
const bodyParser = require('body-parser');
const http = require('http');
const socketIO = require('socket.io');
const hbs = require('hbs');

const {verification} = require('./utils/mail');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

var array = [];

app.use(express.static(publicPath));

app.use(bodyParser.json());

app.set('view engine','hbs');

app.get('/signup',(request,response)=>{
  response.render('signup.hbs');
});

app.get('/verify',(request,response)=>{
  response.render('verify.hbs');
});

io.on('connection',(socket)=>{
  socket.on('newuser',(params,done)=>{
    console.log(params);
    var id=params.id;
    var func = random.generator({
      min : 100000,
      max : 999999,
      integer : true
    });
    var otp = func();
    params.otp = otp;
    array.push(params);
    var log = verification(params,otp,function(e){
      if(!e){
       done(true);
      }
      else{
        done(false);
      }
    });
  });

  socket.on('verify',(params,callback)=>{
    var arr = array.filter((item)=>params.id==item.id&&params.otp==item.otp);
    var length = arr.length;
    console.log(length);
    if(length===1)
    {
      callback(false);
    }
    else {
      callback(true);
    }
  });

});

server.listen(port,()=>{
  console.log(`Server is up on port ${port}`);
});
