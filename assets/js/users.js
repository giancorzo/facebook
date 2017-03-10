//Carga todos los usuarios al local storage
window.addEventListener('load',function() {
  var validUsers = getItemFromStorage('users');
  if (validUsers == null) {
    validUsers = [];
    validUsers.push({ email: "gian.corzo@gmail.com", password: "1234"});
    validUsers.push({ email: "gian@laboratoria.la",  password: "4321"});
    addItemToStorage("users",validUsers);
  }
});
