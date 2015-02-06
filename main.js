var fb = new Firebase("https://treesatlproject.firebaseio.com/");

$('#loginButton').click(function (e) {
  // if(e.keyCode == 13) {
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
        // window.location('success.html');
      }
    });
    $('#usernameInput').val('');
    $('#passwordInput').val('');
    // window.location.load('success.html');
  // }
  return false;
});

$('#loginOfficalButton').keypress(function (e) {
  if (e.keyCode == 13) {
    var username = $('#usernameLoginInput').val();
    var password = $('#passwordLoginInput').val();
    fb.authWithPassword({
      'email': username,
      'password': password
    }, function(error, authData) {
      if (error) {
        console.log('Login failed!', authData);
      } else {
        console.log('Login Successful!', authData);
      }
    }
    );
    $('#loginInput').val('');
    $('#passInput').val('');
  }
});