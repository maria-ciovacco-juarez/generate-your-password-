// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  console.log ("Hey! You clicked the button!")
  // Noting the user  in the console that they clicked the button and it works^
// 1. Prompt the user for the password criteria
//    a. Password length 8 < 128.
//    b. Lowercase, uppercase, numbers, special characters.
// 2. Validate the input.
//    a.
// 3. Generate password based on criteria.
// 4. Display password to the page.
//Variable values:
var askedAlready = false
var person = 0
var finalPassword = "";
var confirmSpecial = 0
var confirmLower
var confirmUpper
var confirmNumber
// Password variable values:
// Special characters
special  = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "`", "~", "|", ";", ":", "/", "?", ">", "<", "."]
// Numerial characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// Alphabet characters
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i" ,"j", "k", "l", "m", "n", "o", "p", "q", "r", "s" ,"t" ,"u", "v", "w", "x", "y", "z"]
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function getRandomLower() {
  return letters[getRandomInt(25)]
}
function getRandomUpper() {
  letter=getRandomLower();
  return letter.toUpperCase();
}
function getRandomSpecial() {
  return special[getRandomInt(19)]
}
// interface code
 //Asks user to input password length
 console.log("Asking password length!")
 person = prompt("Please select a password length between 8 to 128 characters.");
  while (!(person>=0 && person<=128)) {
    person = prompt("Please select a password length between 8 to 128 characters.");
    if (askedAlready){
      alert ("Incorrect. Please try again.")
    }
    else {
      askedAlready = true
    }
  }
confirmLower = confirm ("Would you like to use lowercase letters? If so, click OK.")
confirmUpper = confirm ("Would you like to use uppercase letters? If so, click OK.")
confirmSpecial = confirm ("Would you like to include special characters? If so, click OK.");
confirmNumber = confirm ("Would you like to add numbers? Click OK.")
console.log("confirmLower: " + confirmLower)
console.log("confirmUpper: " + confirmUpper)
console.log("confirmSpecial: " + confirmSpecial)
console.log("confirmNumber: " + confirmNumber)
//
if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
  for (let i = 0; i<person; i++) {
    newCharacter=""
    x=getRandomInt(3)
    switch (x) {
      case 0:
        newCharacter=getRandomLower()
        break;
      case 1:
        newCharacter=getRandomUpper()
        break;
      case 2:
        newCharacter=getRandomInt(9)
        break;
      case 3:
        newCharacter=getRandomSpecial()
        break;
      default:
        break;
    }
    finalPassword+=newCharacter
  }
}
console.log(!confirmLower && confirmUpper && confirmNumber && confirmSpecial)
if (!confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
  for (let i = 0; i<person; i++) {
    newCharacter=""
    x=getRandomInt(2)
    switch (x) {
      case 0:
        newCharacter=getRandomSpecial()
        break;
      case 1:
        newCharacter=getRandomUpper()
        break;
      case 2:
        newCharacter=getRandomInt(9)
        break;
      default:
        break;
    }
    finalPassword+=newCharacter
  }
}
console.log (finalPassword)
  return finalPassword;
  //or do return(password)
    }
// Displays to the user upon clicking the button in the password box (before they select their password criteria)
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);