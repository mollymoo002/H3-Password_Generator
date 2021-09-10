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


//Adds all the numbers, letters, and special character options to variables
var specialChar= ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", 
":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "~"];
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
"Q","R","S","T","U","V","W","X","Y","Z"];



//prompts user to enter the number of characters in a password
var stringOfCharacters = prompt(
  "Enter the number of characters in the password between 8-128"
);
if (stringOfCharacters < 8 || stringOfCharacters > 128) {
  alert("Sorry, your password must be between 8 and 129 characters");
}


//asks the user if they want lowercase letters in their password
var stringOfLower = confirm(
  "Would you like to include lower case letters?"
);
//asks the user if they want uppercase letters in their password
var stringOfUpper = confirm(
  "Would you like to include upper case letters?"
);
//asks the user if they want numbers in their password
var stringOfNum = confirm(
  "Would you like to include numbers?"
  );
  //asks the user if they want special characters in their password
var stringOfSpecial = confirm(
  "Would you like to include special characters? (%, $, @)"
);


//Adds letters, numbers, and/or special characters if the user confirms it
var letterOption = [];
if (stringOfLower === true) { 
  letterOption = letterLower;
}
if (stringOfUpper === true) { 
  letterOption = letterOption.concat(letterUpper);
}
if (stringOfNum === true) { 
  letterOption = letterOption.concat(num);
}
if (stringOfSpecial === true) { 
  letterOption = letterOption.concat(specialChar);
}
else { 
  noInput()
}

// Function for when the user does not choose any criteria
function noInput() {
  if (letterLower === false && letterUpper === false && 
    num === false && specialChar === false) {
  alert("Please choose at least one password criteria")
    }
}



var passwordChoice = []
// Loop through the letterOption length 
for (var i = 0; i < stringOfCharacters.length; i++) {
  // Get random whole number from index
  var characterCode = letterOption[Math.floor(Math.random() * stringOfCharacters.length)]
  passwordChoice.push(letterOption)
}
// Returns password characters and joins into string
console.log(passwordChoice.join(""));