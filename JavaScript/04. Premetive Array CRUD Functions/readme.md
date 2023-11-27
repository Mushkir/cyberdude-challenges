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

[![IMAGE ALT TEXT](http://img.youtube.com/vi/xG5IUyZvbDk&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=29/0.jpg)](http://www.youtube.com/watch?v=xG5IUyZvbDk&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=29 "JavaScript Switch-case (With Examples) )")
