# Switch case (JavaScript Challenge)

This challenge is part of free internship (FullStack Engineer) offered by [CyberDude Networks Pvt. Ltd.] (https://cyberdudenetworks.com/) You can find all the source code and live links below.


> Task #2: Create a Switch case with all possible conditions

<!-- Question: -->
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

if (dataVerify.test(userAge)) {
  switch (true) {
    case userAge < 12: {
      console.log("Ticket Price is 5");
      break;
    }

    case userAge < 18: {
      console.log("Ticket price is 10");
      break;
    }

    case userAge < 60: {
      console.log("Ticket price is 20");
    }

    case userAge > 60: {
      console.log("Ticket price is 15");
      break;
    }

    default:
      console.log("Invalid");
  }
} else {
  alert("Enter Numeric value");
}




### Live Link ->
<!-- Deploy and put the link -->

## Acknoledgments

## References

[![https://www.youtube.com/watch?v=xG5IUyZvbDk&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=29](http://img.youtube.com/vi/xG5IUyZvbDk&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=29/0.jpg)](http://www.youtube.com/watch?v=xG5IUyZvbDk&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=29 "JavaScript Switch-case (With Examples) )")