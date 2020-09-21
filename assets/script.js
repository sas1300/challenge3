// Assignment code here

//prompt for length of password Must be between 8 - 128 characters.

var pwLength = window.prompt("Please select the character length of your password");
  console.log(pwLength);
 
  


//prompt for lowercase

var lowerCase = window.prompt( " Would you like to include 'lowercase' letters in your password? ");

    //If yes (true), 
        if (lowerCase = ) {}

    //If no, 
      else () {}




//prompt for uppercase

  var upperCase = window.prompt( " Would you like to include 'UPPERCASE' letters in your password? ");

    //If yes, 

    //If no, 



//prompt for numeric

  var numbers = window.prompt( " Would you like to include 'Numbers' in your password? ");

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