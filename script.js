// Assignment Code
var generateBtn = document.querySelector("#generate");

var length;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var confirmed;

function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSpecial() {
  var symbols = "!@#$&*^(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var length = prompt("Choose between 8 and 128 characters");
  if (!length) {
    alert("You need a length between 8 and 128 characters!");
  } else if (length < 8 || length > 128) {
    alert("You need a length between 8 and 128 characters!");
  } else {
    confirmLower = confirm(
      "Do you want to use lowercase letters in your password?"
    );
    confirmUpper = confirm(
      "Do you want to use uppercase letters in your password?"
    );
    confirmNumber = confirm("Do you want to use numbers in your password?");
    confirmSpecial = confirm(
      "Do you want to use special characters in your password?"
    );
  }
  //If user clicks cancel for every character prompt
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    alert("Your password requires at least one character!");
  }
  //If user clicks ok for all 4 characters
  if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    alert("All 4!");
  }
  //If user clicks ok for 3 characters
  if (confirmLower && confirmUpper && confirmNumber && !confirmSpecial) {
    alert("Lower Upper and Number");
  }
  if (confirmLower && confirmUpper && confirmSpecial && !confirmNumber) {
    alert("Lower Upper and Special");
  }
  if (confirmLower && confirmSpecial && confirmNumber && !confirmUpper) {
    alert("Lower Special and Number");
  }
  if (confirmUpper && confirmSpecial && confirmNumber && !confirmLower) {
    alert("Upper Special and Number");
  }
  //If user clicks ok for 2 characters
  if (confirmLower && confirmUpper && !confirmNumber && !confirmSpecial) {
    alert("Lower and upper");
  }
  if (confirmLower && confirmNumber && !confirmUpper && !confirmSpecial) {
    alert("Lower and Number");
  }
  if (confirmLower && confirmSpecial && !confirmUpper && !confirmNumber) {
    alert("Lower and Special");
  }
  if (confirmUpper && confirmNumber && !confirmSpecial && !confirmLower) {
    alert("Upper and Number");
  }
  if (confirmUpper && confirmSpecial && !confirmNumber && !confirmLower) {
    alert("Upper and Special");
  }
  if (confirmNumber && confirmSpecial && !confirmUpper && !confirmLower) {
    alert("Number and Special");
  }
  //If user clicks ok for 1 character
  if (confirmUpper && !confirmLower && !confirmNumber && !confirmSpecial) {
    alert("Only Upper");
  }
  if (confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    alert("Only Lower");
  }
  if (confirmNumber && !confirmUpper && !confirmLower && !confirmSpecial) {
    alert("Only Number");
  }
  if (confirmSpecial && !confirmUpper && !confirmLower && !confirmNumber) {
    alert("Only Special");
  }

  console.log(length);
}
