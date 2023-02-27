// Assignment Code
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

function params() {
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
  // testing progress
  console.log(lwCase, upCase, numb, spcChar, passLength);

  // if (lwCase) {
  //   passSet.push('abcdefghijklmnopqrstuvwxyz');
  // } if (upCase) {
  //   passSet.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  // } if (numb) {
  //   passSet.push('1234567890');
  // } if (spcChar) {
  //   passSet.push('!@#$%^&*');
  // }
  if (lwCase && !upCase && !numb && !spcChar) {
    passSet = lwCaseChar;
  } else if (!lwCase && upCase && !numb && !spcChar) {
    passSet = upCaseChar;
  } else if (!lwCase && !upCase && numb && !spcChar) {
    passSet = numbChar; 
  } else if (!lwCase && !upCase && !numb && spcChar) {
    passSet = spcCharSet;
  } else if (lwCase && upCase && !numb && !spcChar) {
    passSet = lwCaseChar.concat(upCaseChar);
  } else if (lwCase && !upCase && numb && !spcChar) {
    passSet = lwCaseChar.concat(numbChar);
  } else if (lwCase && !upCase && !numb && spcChar) {
    passSet = lwCaseChar.concat(spcCharSet);
  } else if (!lwCase && upCase && numb && !spcChar) {
    passSet = upCaseChar.concat(numbChar);
  } else if (!lwCase && upCase && !numb && spcChar) {
    passSet = upCaseChar.concat(spcCharSet);
  } else if (!lwCase && !upCase && numb && spcChar) {
    passSet = numbChar.concat(spcCharSet);
  } else if (lwCase && upCase && numb && !spcChar) {
    passSet = lwCaseChar.concat(upCaseChar, numbChar);
  } else if (lwCase && upCase && !numb && spcChar) {
    passSet = lwCaseChar.concat(upCaseChar, spcCharSet);
  } else if (lwCase && !upCase && numb && spcChar) {
    passSet = lwCaseChar.concat(numbChar, spcCharSet);
  } else if (!lwCase && upCase && numb && spcChar) {
    passSet = upCaseChar.concat(numbChar, spcCharSet);
  } else if (lwCase && upCase && numb && spcChar) {
    passSet = lwCaseChar.concat(upCaseChar, numbChar, spcCharSet);
  } else {
    alert("Must use at least one type of character.")
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
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







// program to generate random strings

// declare all characters
// const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// function generateString(length) {
//     let result = ' ';
//     const charactersLength = characters.length;
//     for ( let i = 0; i < length; i++ ) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }

//     return result;
// }

// console.log(generateString(5));