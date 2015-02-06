//BASE DEPENDENCIES
var fb = new Firebase("https://treesatlanta.firebaseio.com/");

$('#submit').click(function (e) {
    fb.createUser({
        'email' : $('#emailInput').val(),
        'password' : $('#passwordInput').val()
    }, function(error) {
        if (error) {
            fw.alert(error.message, 'Error');
        } else {
            print("Success");
        }
    });
});
