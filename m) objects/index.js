let myBook = {
  title: 'JavaScript Introduction',

  author: 'Nathan Sebhastian',
};

// console.log(myBook);

// change the author property
myBook.author = 'John Doe';

// To delete a property from your object
delete myBook.author;

// To check if a certain property exists in your object
let person = {
  firstName: 'Nathan',
  lastName: 'Sebhastian',
};
// check if firstName exists
console.log('firstName' in person); // true
