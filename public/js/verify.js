var socket = io();

socket.on('connect', function () {
  var params = jQuery.deparam(window.location.search);
  console.log(params.id);
});
