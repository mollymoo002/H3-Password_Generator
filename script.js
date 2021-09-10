// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//prompts user to enter the criteria for the password
function generatePassword() {
  var stringOfCharacters = prompt(
    "Enter the number of characters in the password between 8-128"
  );
  var letterOption = "";

  if (stringOfCharacters < 8 || stringOfCharacters > 128) {
    return "Sorry, your password must be between 8 and 129 characters";
  }

  var stringOfLower = confirm("Would you like to include lower case letters?");

  if (stringOfLower === true) {
    letterOption += "abcdefghijklmnopqrstuvwxyz"
  }

  //asks the user if they want uppercase letters in their password
  var stringOfUpper = confirm("Would you like to include upper case letters?");

  if (stringOfUpper === true) {
    letterOption += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  //asks the user if they want numbers in their password
  var stringOfNum = confirm("Would you like to include numbers?");

  if (stringOfNum === true) {
    letterOption += "0123456789"
  }

  //asks the user if they want special characters in their password
  var stringOfSpecial = confirm(
    "Would you like to include special characters? (%, $, @)"
  );

  if (stringOfSpecial === true) {
    letterOption += "!#$%&()*+,-./:;<=>?@[]^_{}~"
  }


  if (
    stringOfLower === false &&
    stringOfUpper === false &&
    stringOfNum === false &&
    stringOfSpecial === false
  ) {
    "Please choose at least one password criteria";
  }
  realVal = "";
  for (var i = 0; i < letterOption.length; i++) {
    // Get random whole number from index and push it to the passwordChoice array
    realVal += letterOption.charAt(Math.floor(Math.random() * letterOption.length));
  }
  return realVal;
}