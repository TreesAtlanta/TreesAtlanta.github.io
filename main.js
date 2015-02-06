//BASE DEPENDENCIES
var fb = new Firebase("https://treesatlanta.firebaseio.com/");

$('#passwordInput').keypress(function (e) {
  if(e.keyCode == 13) {
  	var name = $('#nameInput').val()
    var username = $('#emailInput').val();
    var password = $('#passwordInput').val();
    fb.createUser({
      name: name,
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
    $('#nameInput').val('');
    $('#usernameInput').val('');
    $('#passwordInput').val('');
  }
});
