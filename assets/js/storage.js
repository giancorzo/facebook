
function addItemToStorage(key,value) {
  if (typeof(Storage) != "undefined") {
    localStorage.setItem(key,JSON.stringify(value)); //Local storage only supports strings
  } else {
    console.log("No local storage support");
  }
}

function getItemFromStorage(key,value) {
  if (typeof(Storage) != "undefined") {
    return JSON.parse(localStorage.getItem(key)); //Local storage only supports strings
  } else {
    console.log("No local storage support");
  }
  return null;
}
