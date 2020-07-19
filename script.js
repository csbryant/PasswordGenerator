// Assignment Code

//Variables
var generateBtn = document.querySelector("#generate");

var length;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var confirmed;

//Creates Random Characters

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

function randomForGen(q) {
  return Math.floor(Math.random() * q);
}

// Function generates password depending on confirmed characters

function generator() {
  confirmed = "";
  for (var i = 0; i < length; i++) {
    var gen = randomForGen(4);
    if (gen == 0 && confirmLower) {
      confirmed += randomLower();
    } else if (gen == 1 && confirmNumber) {
      confirmed += randomNumber();
    } else if (gen == 2 && confirmUpper) {
      confirmed += randomUpper();
    } else if (gen == 3 && confirmSpecial) {
      confirmed += randomSpecial();
    } else {
      i--;
    }
  }
  return confirmed;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function determines user input and selects which characters are confirmed based on prompts

function generatePassword() {
  length = prompt("Choose between 8 and 128 characters");
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
    confirmNumber = confirm(
      "Do you want to use numbers in your password?"
      );
    confirmSpecial = confirm(
      "Do you want to use special characters in your password?"
    );
    //If user clicks cancel for every character prompt (Needs to not pop up when length is too long)
    if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
      alert("Your password requires at least one character!");
    } else {
      return generator();
    }
  }
    //Returns a blank form if user chooses no, < 8, or > 128 characters
  return "";
}
