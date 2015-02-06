//BASE DEPENDENCIES
var fb = new Firebase("https://helloworldjs.firebaseio.com/");

$('#passwordInput').keypress(function (e) {
  if(e.keyCode == 13) {
    var username = $('#usernameInput').val();
    var password = $('#passwordInput').val();
    fb.createUser({
      email: username,
      password: password
    }, function(error) {
      if (error) {
        switch (error.code) {
          case "EMAIL_TAKEN":
            console.log('Email already taken');
            break;
          case "INVALID_EMAIL":
            console.log('Invalid email');
            break;
          default:
            console.log('Something went wrong', error);
        }
      } else {
        console.log('User account created!');
      }
    });
    $('#usernameInput').val('');
    $('#passwordInput').val('');
  }
});

fb.on('child_added', function(snap) {
  var message = snap.val();
  displayChatMessage(message.name, message.message);
});
