//* Loops:
//* - For
//* - While
//* - Do While
//* - For In
//* - For Of
//* - ForEach
//!+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//* Creating an Empty Array Object
const library = [
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: ["Douglas Adams","Harper Lee"],
    genre: "Science Fiction",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
  },
];

// For loop
const listBookTitle = function () {
  console.log("Book List: ");
  for (let i = 0; i < library.length; i++) {
    console.log(`${"\t"} ${i + 1}. ${library[i].title}`);
  }
};

// While loop
const listAuthor = function () {
  console.log("List of Authors");

  let i = 0;
  while (i < library.length) {
    console.log(`${"\t"} ${i + 1}. ${library[i].title}`);
    i++;
  }
};



listBookTitle();
listAuthor();
