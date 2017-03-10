window.addEventListener('load',function() {

  var loginButton = document.getElementById('login');
  loginButton.addEventListener('click',function() {

    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var valid = true;

    if (emailInput.value == "") {
      showMessage("email_error","No puede estar vacio");
    } else {
      showMessage("email_error","");
    }

    if (passwordInput.value == "") {
      showMessage("password_error","No puede estar vacio");
    } else {
      showMessage('password_error',"");
    }
     if (!/([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})/gi.test(emailInput.value)) {
      showMessage("email_error","No es un correo válido");
    } else {
      showMessage('email_error',"");
    }

    if (emailInput.value != "" &&
        passwordInput.value != "" &&
        /([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})/gi.test(emailInput.value)) {

      if (authenticate(emailInput.value,passwordInput.value)) {
        window.location = 'index.html';
      }
    }

  });
});

function showMessage(element,message) {
  var e = document.getElementById(element);
  e.innerHTML = message;
}

function authenticate(email,password) {
  var validUsers = getItemFromStorage("users");
  if (validUsers != null) {
    var user = validUsers.filter(function(user) {
      return user.email == email;
    })[0];
    if (user != null) {
      return user.email == email && user.password == password;
    }
  }
  return false;
}
