var socket = io();

socket.on('connect', function () {
  var params = jQuery.deparam(window.location.search);

  var count=0;
  jQuery('#otp-form').on('submit',function(e){
    e.preventDefault();

    var otp = jQuery('#OTP').val();
    params.otp = otp;
    socket.emit('verify',params,function(e){
      if(e){
        if(count==2){
          jQuery('body').append('<p>Your attempts are expired</p>');
          window.location.replace('/');
        }
        else {
          jQuery('body').append('<p>Incorrect OTP</p>');
          count++;
        }
      }
      else{
        alert('Your account was successfully created');
        window.location.replace('/');
      }
    });
  });
});
