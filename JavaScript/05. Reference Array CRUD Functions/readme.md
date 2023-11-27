# Referece type (JavaScript Challenge)

This challenge is part of free internship (FullStack Engineer) offered by [CyberDude Networks Pvt. Ltd.] (https://cyberdudenetworks.com/) You can find all the source code and live links below.

> Task #3: Create an Primitive Array and Reference Object Perform CRUD operations (Create, Read, Update, Delete)

> JavaScript Code

> Creating an Object
let fruits = [
    { id: 1, fruitName: "Apple", price: 100 },
    { id: 2, fruitName: "Orange", price: 300 },
    { id: 3, fruitName: "Banana", price: 500 },
  ];
  
> Adding New Items
  fruits.push(
    { id: 4, fruitName: "Grape", price: 800 },
    { id: 5, fruitName: "Jack", price: 1200 }
  );
  
> Update
>Before update Need to search item, then need to do the update operation
  let findItm = fruits.find((findItem) => {
    return findItem.fruitName == "Grape";
  });
  
> Updating Grape Price as 100
  findItm.price = 100;
  
> Delete: Need to delete Banana's record
  let delEl = fruits.filter((deleteEl) => {
      return deleteEl.fruitName != "Banana"
  })
  
  fruits = delEl
  
  
> Read
  console.log(fruits);
  

### Live Link ->

> Deploy and put the link

## Acknoledgments

## References
In lieu of referencing the Object-related series, I would like to bring your attention to our JavaScript series. I believe that delving into these materials will provide you with a more comprehensive understanding of the subject matter.

[![https://www.youtube.com/watch?v=OuUqS8Po5ps&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa](http://img.youtube.com/vi/OuUqS8Po5ps&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa/0.jpg)](http://www.youtube.com/watch?v=OuUqS8Po5ps&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa "What is JavaScript - (தமிழில்) (Tamil)")