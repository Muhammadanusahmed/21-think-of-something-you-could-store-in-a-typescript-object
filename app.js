var book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    yearPublished: 1937
};
console.log("Book Info: ".concat(book.title, " is written by ").concat(book.author, ", published in ").concat(book.yearPublished));
// Question22: intentional error
var friends = ["Alice", "Bob", "Charlie"];
console.log(friends[3]); // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
friends[2] = "Charlie"; // Correcting the error by accessing a valid index.
console.log(friends[2]);
