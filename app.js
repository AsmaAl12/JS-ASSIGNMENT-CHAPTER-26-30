//======================Assignment Chapter (26-30)========================//
//===========================MATH METHODS============================//

// Q1: Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number.
// c. floor value of the number.
// d. ceil value of the number.
// Ans:
// var number = +prompt("Write a positive integer!");
// document.write("<b>Number: </b>" + number + "<br>");
// document.write("<b>Round off value: </b>" + Math.round(number) + "<br>");
// document.write("<b>Floor value: </b>" + Math.floor(number) + "<br>");
// document.write("<b>Ceil value: " + Math.ceil(number) + "<br>");



// Q2:Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number.
// b. round off value of the number.
// c. floor value of the number.
// d. ceil value of the number.
// Ans:
// var negativenumber = +prompt("Write a negative integer!");
// document.write("<b>Number: </b>" + negativenumber + "<br>");
// document.write("<b>Round off value: </b>" + Math.round(negativenumber) + "<br>");
// document.write("<b>Floor value: </b>" + Math.floor(negativenumber) + "<br>");
// document.write("<b>Ceil value: " + Math.ceil(negativenumber) + "<br>");



// Q3:Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of -5 is 5.
// Ans:
// var absoluteNumber = +prompt("Write na number");
// document.write("Absolute Value of " + absoluteNumber + " is " + Math.abs(absoluteNumber) + "<br>");



// Q4: Write a program that simulates a dice using random() method of JS Math class.
// Display the value of dice in your browser.
// Ans:
// var number = Math.random();
// var newNumber = Math.floor(number * 6 + 1);
// document.write("<b>Random dice value:</b> " + newNumber + "<br>");



// Q5:. Write a program that simulates a coin toss using random()method of JS Math class.
// Display the value of coin in your browser .
// Ans:
// var number = Math.random();
// var newNum = Math.floor(number * 2 + 1);
// if(newNum === 1){
//     document.write( 1 + "<br><b>Random coin value:</b> Tails"  + "<br>");
// }
// else{
//     document.write(2 + "<br><b>Random coin value:</b> head" + "<br>");
// }



// Q6: Write a program that shows a random number between 1 and 100 in your browser.
// Ans:
// var randomNumber = Math.random();
// var randomNumber1to100 = Math.floor(randomNumber * 100 + 1);
// document.write("<b>Random number between 1 and 100: </b>" + randomNumber1to100 + "<br>");



// Q7:. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. 
// Possible user inputs can be:
// a. 50kgs.
// b. 50kgs.
// c. 50.2kgs
// d. 50.2kgs.
// Ans:
// var userInput = parseInt(prompt("Enter your weight in kilograms!"));
// document.write("<b>The weight of user is:</b> " + userInput + " kilograms");



// Q8:. Write a program that stores a random secret number from 1 to 10 in a variable.
// Ask the user to input a number between 1 and 10. 
// If the user input equals the secret number, congratulate the user.
// Ans:
var userNumber = +prompt("Guess a number  between 1 and 10.");
var randomSecretNum = Math.random();
var number = Math.floor(randomSecretNum * 10 + 1);
var matchFound = false;
if(userNumber === number){
    alert("Congratulations you win!");
}
else{
    alert("Sorry you lose!");
}
document.write("<b>The number was:</b> " + number + "<br>");
document.write("<b>Your entered number is:</b> " + userNumber + "<br>");


//====================Assignment Completed====================//