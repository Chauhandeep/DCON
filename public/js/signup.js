var socket = io();

var form = jQuery('#signupform');

form.on('submit', function (e) {
  e.preventDefault();
  var firstname = document.getElementById('firstname').value;
  var lastname = document.getElementById('lastname').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var re_password = document.getElementById('re-password').value;
  var day = document.getElementById('day').value;
  var month = document.getElementById('month').value;
  var year = document.getElementById('year').value;
  var male = document.getElementById('male').checked;
  var female = document.getElementById('female').checked;
  var agree = document.getElementById('agree').checked;
  if(agree==true && (male==true || female==true) && day!=='nothing' &&month!=='nothing'&&year!=='nothing'&&password==re_password)
  {
    var birthday = `${day}/${month}/${year}`;
    var sex;
    if(male==true)
    {
      sex = 'male';
    }
    else {
      sex = 'female';
    }
      var id = socket.id;
      socket.emit('newuser',{
        id,
        firstname,
        lastname,
        email,
        password,
        birthday,
        sex
      },function(e){
        if(e)
        {
             jQuery('body').append('<p>There was some Error</p>');
        }
        else{
          window.location.replace(`/verify?id=${id}`);
        }
      });

  }
  else {
    console.log('provide valid credentials');
  }
});
