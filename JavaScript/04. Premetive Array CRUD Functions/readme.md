# Primitive (JavaScript Challenge)

This challenge is part of free internship (FullStack Engineer) offered by [CyberDude Networks Pvt. Ltd.] (https://cyberdudenetworks.com/) You can find all the source code and live links below.

> Task #3: Create an Primitive Array and Reference Object Perform CRUD operations (Create, Read, Update, Delete)

<!-- JavaScript Code -->

// Primitive Array
const fruits = ["Apple","Jack","Banana"]

// Adding New item as last element
fruits.push("Orange")

// Adding new item as first element
fruits.unshift("Grapes")

// To do: Update Banana as Mangosteen
// Before update need to search the item
const findElement = (element) => {
return element === "Banana"
}

// Updating the item
const indexOfElement = fruits.findIndex(findElement)
fruits[indexOfElement] = "Mangosteen";

// Delete Apple
// Function for find index of searching item
const findDeleteEl = (deleteEl) => {
return deleteEl === "Apple"
}

// Deleting the item
const delIndex = fruits.findIndex(findDeleteEl)
fruits.splice(delIndex,delIndex)

// Directly index apply
// fruits.splice(1,1)

// Reading Items on fruits Array
console.log(fruits);

### Live Link ->

<!-- Deploy and put the link -->

## Acknoledgments

## References

## References
In lieu of referencing the Object-related series, I would like to bring your attention to our JavaScript series. I believe that delving into these materials will provide you with a more comprehensive understanding of the subject matter.

[![https://www.youtube.com/watch?v=OuUqS8Po5ps&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa](http://img.youtube.com/vi/OuUqS8Po5ps&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa/0.jpg)](http://www.youtube.com/watch?v=OuUqS8Po5ps&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa "What is JavaScript - (தமிழில்) (Tamil)")