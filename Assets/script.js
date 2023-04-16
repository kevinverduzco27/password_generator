// adding varible
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  let passwordLength = prompt("How many characters would you like in your password? (Please enter a value between 8-24)");

  passwordLength = parseInt(passwordLength);
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 24) {
    alert("Please enter a valid number between 8-24.");
    return;
  }
  var includeLowercase = confirm("Would you like to include lowercase characters?");
  var includeUppercase = confirm("Would you like to include uppercase characters?");
  var includeNumeric = confirm("Would you like to include numeric characters?");
  var includeSpecial = confirm("Would you like to include special characters?");

  // Create the set of characters to choose from based on the user's choices.
  let passwordChars = "";
  if (includeLowercase) passwordChars += "abcdefghijklmnopqrstuvwxyz";
  if (includeUppercase) passwordChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeNumeric) passwordChars += "0123456789";
  if (includeSpecial) passwordChars += "!#$%&'()*+,-./:;<=>?@[]^_`{|} ~";

  // Generate the password.
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += passwordChars.charAt(Math.floor(Math.random() * passwordChars.length));
  }

  // Display the generated password.
  passwordText.textContent = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
