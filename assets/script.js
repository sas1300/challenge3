// Assignment code here



//Create arrays
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var numbers = ["0","1","2","3","4","5","6","7","8","9"];

var special = ["!","@","#","$","%","^","&","*","(",")","_","+","?","=","~","-","{","}","[","]","/",":"];



//prompt for length of password Must be between 8 - 128 characters.

var pwLength = window.prompt("Please select the character length of your password");
  console.log(pwLength);
 
  


//prompt for lowercase

var lowerCaseChar = window.prompt( " Would you like to include 'lowercase' letters in your password? ");

   


//prompt for uppercase

  var upperCaseChar = window.prompt( " Would you like to include 'UPPERCASE' letters in your password? ");

    //If yes, 

    //If no, 



//prompt for numeric

  var numbersChar = window.prompt( " Would you like to include 'Numbers' in your password? ");

    //If yes, 

    //If no, 


//prompt for special characters

  var specChar = window.prompt( " Would you like to include 'Special Characters' in your password? ");

    //If yes, 

    //If no, 

    

//If at leaset one input is valiated then generate random number 

  // Log number function????   var logNums = function(num) {};  
  //Example: var logNums = function(num) {
  //         for (var i = 1; i <= num; i++) {
    ///      console.log(i);
  //         }
//           };



    //display password in window alert.

    console.log(value);

//If at least one input is not validated, then give error window alert You must select at least one character type for your password.
  //character prompts repeat











// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







    //Generating a random number
    var value = Math.floor(Math.random() *167);

    //print the random numbers to console
    console.log (value);