const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const hbs = require('hbs');

const {verification} = require('./utils/mail');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

app.set('view engine','hbs');

app.get('/signup',(request,response)=>{
  response.render('signup.hbs');
});

io.on('connection',(socket)=>{

});

server.listen(port,()=>{
  console.log(`Server is up on port ${port}`);
});
