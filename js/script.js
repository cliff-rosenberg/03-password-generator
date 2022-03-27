// Declare arrays
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialChars = ["!", "(", ")", "-", ".", "?", "{", "}", "_", "`", "~", ";", ":", "#", "$", "%", "^", "&", "*", "+", "="];

//My code here
function generatePassword() {
  // Ask user for options used to generate password
  var passLength = prompt("Length of Password? (8 to 128)");
  if ((passLength < 8) || (passLength >128)){
    alert("Password length must be GREATER than 8 or LESS than 128!");
    return "Please try Again!";
  }
  var hasUppercase = confirm("Include Upper Case Characters?");
  var hasLowercase = confirm("Include Lower Cases Characters?");
  var hasNumeric = confirm("Include Numeric Characters?");
  var hasSpecial = confirm("Include Special Characters?");
  if ((!hasUppercase) && (!hasLowercase) && (!hasNumeric) && (!hasSpecial)) {
    alert("Must select at least one type of character for password!");
    return "Please try Again!";
  }

  // Object to store password options selected by user
  var passwordOptions = {
    passLength: passLength,
    hasUppercase: hasUppercase,
    hasLowercase: hasLowercase,
    hasNumeric: hasNumeric,
    hasSpecial: hasSpecial
  }

  //Storage for result
  var result = [];
  var formattedResult = "";
  var charactersRequired = [];
  // Generates a random number and selects a character from array given
  function randCharSelect(array) {
    return array[Math.floor(Math.random() * array.length)]
  }
  // Password options are evaluated here
  if(passwordOptions.hasUppercase){
    result.push(randCharSelect(upperCase));
    charactersRequired = charactersRequired.concat(upperCase);
  }
  if(passwordOptions.hasLowercase){
    result.push(randCharSelect(lowerCase));
    charactersRequired = charactersRequired.concat(lowerCase);
  }
  if(passwordOptions.hasNumeric){
    result.push(randCharSelect(numeric));
    charactersRequired = charactersRequired.concat(numeric);
  }
  if(passwordOptions.hasSpecial){
    result.push(randCharSelect(specialChars));
    charactersRequired = charactersRequired.concat(specialChars);
  }
  // Loop for Password Length requested
  var passwdLengthSelected = result.length;
  for(var i =0; i < (passwordOptions.passLength - passwdLengthSelected); i++){
    var randomChars = randCharSelect(charactersRequired);
    result.push(randomChars);
    console.log(result);
  }
  //Remove commas from resulting password array to display password
  formattedResult = result.join("");
  return formattedResult;
}

// Assignment Code given here
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
