# Object (JavaScript Challenge)

This challenge is part of free internship (FullStack Engineer) offered by [CyberDude Networks Pvt. Ltd.] (https://cyberdudenetworks.com/) You can find all the source code and live links below.


> Task #2: Create an Object and Perform CRUD operations (Create, Read, Update, Delete)
<!-- JavaScript Code -->
Creating Object name as "person"
let person = {
    firstName: "Mohamed",
    lastName: "Mushkir",
    personAge: 27,
  
  <!-- Getter method -->
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  
  <!-- Setter method -->
    set fullName(nameValue) {
      let newName = nameValue.split(" ");
      this.firstName = newName[0];
      this.lastName = newName[1] ?? "";
    },
  
    activities() {
      let activities = [
        "Learning new things",
        "Coding",
        "Watching movies",
        "Photography",
      ];
  
      if (this.lastName == "") {
        console.log(`Leisure Activities of ${person.firstName}`);
        for (let i = 0; i < activities.length; i++) {
          console.log(`${i + 1}. ${activities[i]}`);
        }
      } else {
        console.log(`Leisure Activities of ${person.lastName}: `);
        for (let i = 0; i < activities.length; i++) {
          console.log(`${i + 1}. ${activities[i]}`);
        }
      }
    },
  };
  
  // Updating Name using Set Method
  person.fullName = "Musakir";
  
  // Showing First Name and Last Name
  console.log(`First Name: ${person.firstName} 
  Last Name: ${person.lastName}`);
  console.log(`Full Name is: ${person.fullName}`);
  
  // Delete Operation
  // delete person.personAge
  typeof person.personAge == "undefined" ? console.log(`Age is Deleted`) : console.log(`Age is ${person.personAge}`);
  
  person.activities();
  
  // person.activities();
  




### Live Link ->
<!-- Deploy and put the link -->

## Acknoledgments

## References
In lieu of referencing the Object-related series, I would like to bring your attention to our JavaScript series. I believe that delving into these materials will provide you with a more comprehensive understanding of the subject matter.

[![https://www.youtube.com/watch?v=OuUqS8Po5ps&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa](http://img.youtube.com/vi/OuUqS8Po5ps&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa/0.jpg)](http://www.youtube.com/watch?v=OuUqS8Po5ps&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa "What is JavaScript - (தமிழில்) (Tamil)")