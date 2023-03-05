var generateBtn = document.querySelector("#generate");
var lwCase = true;
var lwCaseChar = 'abcdefghijklmnopqrstuvwxyz';
var upCase = false;
var upCaseChar = 'ABCDEFGHIJKLOMNOPQRSTUVWXYZ';
var numb = false;
var numbChar = '1234567890'
var spcChar = false;
var spcCharSet = '!@#$%&*'
var plength = 25;
var passSet = [];
var final = "";
var passLength = 8;
var copyClip = document.querySelector("#copyClip");

function params() {
  final = "";
  let lwCase = confirm("Confirm using lowercase letters?");
  let upCase = confirm("Confirm using uppercase letters?");
  let numb = confirm("Confirm using numbers?");
  let spcChar = confirm("Confirm using special characters?");
  let plength = prompt("How many characters, between 8-128, would you like your generated password to contain?")
  if (plength > 128) {
    passLength = 128;
    alert("Maximum characters is 128.");
  } else if (plength < 8) {
    passLength = 8;
    alert("Minimum characters is 8.");
  } else {
    passLength = parseInt(plength);
  }

  if (lwCase && !upCase && !numb && !spcChar) {
    passSet = lwCaseChar;
    alert("Your password will contain: Lowercase letters.");
  } else if (!lwCase && upCase && !numb && !spcChar) {
    passSet = upCaseChar;
    alert("Your password will contain: Uppercase letters.");
  } else if (!lwCase && !upCase && numb && !spcChar) {
    passSet = numbChar; 
    alert("Your password will contain: Numbers.");
  } else if (!lwCase && !upCase && !numb && spcChar) {
    passSet = spcCharSet;
    alert("Your password will contain: Special characters.");
  } else if (lwCase && upCase && !numb && !spcChar) {
    passSet = lwCaseChar.concat(upCaseChar);
    alert("Your password will contain: Lowercase letters and uppercase letters.");
  } else if (lwCase && !upCase && numb && !spcChar) {
    passSet = lwCaseChar.concat(numbChar);
    alert("Your password will contain: Lowercase letters and numbers.");
  } else if (lwCase && !upCase && !numb && spcChar) {
    passSet = lwCaseChar.concat(spcCharSet);
    alert("Your password will contain: Lowercase letters and special characters.");
  } else if (!lwCase && upCase && numb && !spcChar) {
    passSet = upCaseChar.concat(numbChar);
    alert("Your password will contain: Uppercase letters and numbers.");
  } else if (!lwCase && upCase && !numb && spcChar) {
    passSet = upCaseChar.concat(spcCharSet);
    alert("Your password will contain: Uppercase letters and special characters.");
  } else if (!lwCase && !upCase && numb && spcChar) {
    passSet = numbChar.concat(spcCharSet);
    alert("Your password will contain: Numbers and special characters.");
  } else if (lwCase && upCase && numb && !spcChar) {
    passSet = lwCaseChar.concat(upCaseChar, numbChar);
    alert("Your password will contain: Lowercase letters, uppercase letters, and numbers.");
  } else if (lwCase && upCase && !numb && spcChar) {
    passSet = lwCaseChar.concat(upCaseChar, spcCharSet);
    alert("Your password will contain: Lowercase letters, uppercase letters, and special characters.");
  } else if (lwCase && !upCase && numb && spcChar) {
    passSet = lwCaseChar.concat(numbChar, spcCharSet);
    alert("Your password will contain: Lowercase letters, numbers, and special characters.");
  } else if (!lwCase && upCase && numb && spcChar) {
    passSet = upCaseChar.concat(numbChar, spcCharSet);
    alert("Your password will contain: Uppercase letters, numbers, and special characters.");
  } else if (lwCase && upCase && numb && spcChar) {
    passSet = lwCaseChar.concat(upCaseChar, numbChar, spcCharSet);
    alert("Your password will contain: Lowercase letters, uppercase letters, numbers, and special characters.");
  } else {
    alert("Must use at least one type of character. Using only lowercase letters.")
    passSet = lwCaseChar;
  }
  return passSet
}

function generatePassword(length) {
  // console.log(length);
  for (let i = 0; i < length; i++) {
    final += passSet.charAt(Math.floor(Math.random() * passSet.length));
  }
  return final;
}

// Write password to the #password input
function writePassword() {
  params();
  var final = generatePassword(passLength);
  var passwordText = document.querySelector("#password");

  console.log(passSet);
  console.log(final);
  passwordText.value = final;
  
  copyClip.addEventListener("click", function() {
    passwordText.select();
    passwordText.setSelectionRange(0, 99999); // For mobile devices
  
    navigator.clipboard.writeText(passwordText.value);
  });
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

