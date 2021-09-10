// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var specialChar= ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", 
":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "~"];
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
"Q","R","S","T","U","V","W","X","Y","Z"];

var passwordOption = [];

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//prompts user to enter the number of characters in a password
var stringOfCharacters = prompt(
  "Enter the number of characters in the password between 8-128"
);
var numOfPasswords = parseInt(stringOfCharacters);

var lengthOfPass = length.numOfPasswords;


//changes the type of stringOfCharacters from string to integer
numOfCharacters = parseInt(stringOfCharacters);

if (numOfCharacters >= 8 && numOfCharacters <= 128) {
  
} else {
  alert("Sorry, your password must be between 8 and 129 characters");
}


//asks the user if they want lowercase letters in their password
var stringOfLower = confirm(
  "Would you like to include lower case letters?"
);
if (stringOfLower) {
  passwordOptionLo = passwordOption.concat(letterLower);
}




//asks the user if they want uppercase letters in their password
var stringOfUpper = confirm(
  "Would you like to include upper case letters?"
);

if (stringOfUpper) {
  passwordOptionUp = passwordOption.concat(letterUpper);
}




//asks the user if they want numbers in their password
var stringOfNum = confirm("Would you like to include numbers?");
if (stringOfNum) {
  passwordOptionNum = passwordOption.concat(num);
} 





//asks the user if they want special characters in their password
var stringOfSpecial = confirm(
  "Would you like to include special characters? (%, $, @)"
);
if (stringOfSpecial) {
  passwordOptionSp = passwordOption.concat(specialChar);
}


console.log(lengthOfPass);