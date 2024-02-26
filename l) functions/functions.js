function greet() {
  // function body here

  console.log('Hello!');
}
greet(); // Hello!

// How you use that name parameter inside the function
function greet(name) {
  console.log(`Hello, ${name}!`);

  console.log('Nice weather today, right?');
}
greet('Peter');
