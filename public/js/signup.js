jQuery('#signupform').on('submit', function (e) {
  e.preventDefault();

  var messageTextbox = jQuery('[name=firstname]');
  console.log(messageTextbox.val());
});
