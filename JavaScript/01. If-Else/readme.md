# If-Else (JavaScript Challenge)

This challenge is part of free internship (FullStack Engineer) offered by [CyberDude Networks Pvt. Ltd.] (https://cyberdudenetworks.com/) You can find all the source code and live links below.


> Task #1: Create a If-Else condition with all possible conditions

<!-- JS Code -->

Write a program that calculates the ticket price based on age with the following conditions: 
Age below 12 pay a ticket price of 5, 
Age below 18 pay a ticket price of 10, 
Age below 60 pay a ticket price of 20, 
Age over 60 play a ticket price of 15.

<!-- JavaScript Code -->

<!-- Getting input from user -->
const userAge = prompt("Enter Your Age: ");

<!-- Verifying user entered value either number or text. -->
const dataVerify = /^\d+$/; 

function ticketCalculate(age) {
  if (age < 12) {
    console.log(`You are under 12. Your ticket price is Rs. 5.00/-`);
  } else if (age < 18) {
    console.log(`You are under 18. Your ticket price is Rs. 10.00/-`);
  } else if (age < 60) {
    console.log(`You are under 60. Your ticket price is Rs. 20.00/-`);
  } else {
    console.log(`You are above 60. Your ticket price is Rs. 15.00/-`);
  }
}

if (dataVerify.test(userAge)) {
  ticketCalculate(userAge);
} else {
  alert("Enter Valid Number Value");
}




### Live Link ->
<!-- Deploy and put the link -->

## Acknoledgments

## References

[![IMAGE ALT TEXT](http://img.youtube.com/vi/WebG_D9-U80&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=28/0.jpg)](http://www.youtube.com/watch?v=WebG_D9-U80&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=28 "JavaScript If-Else (With Examples)")