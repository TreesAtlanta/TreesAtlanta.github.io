var fb = new Firebase("https://treesatlproject.firebaseio.com/");

$('#loginButton').click(function (e) {
  // if(e.keyCode == 13) {
    var username = $('#usernameInput').val();
    var password = $('#passwordInput').val();
    var name = $('#nameInput').val();
    fb.push({name: name});
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
        window.location = "login.html";
        // window.location('success.html');
      }
    });
    // window.location.load('success.html');
  // }
  return false;
});

$('#passwordLoginInput').keypress(function (e) {
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
        if (username == "admin@admin.com") {
        	console.log("Asdf");
        	window.location = "admin.html";
        } else {
        	window.location = "home.html";
        }
      }
    });
    $('#loginInput').val('');
    $('#passInput').val('');

    return false;
  }
});