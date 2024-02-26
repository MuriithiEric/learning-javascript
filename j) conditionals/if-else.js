// The if statement allows you to create a program that runs only if a specific condition is met.
let balance = 7000;

if (balance > 5000) {
  console.log("You have the money for this trip. Let's go!");
}

// This is where the else statement comes in.
if (balance > 5000) {
  console.log("You have the money for this trip. Let's go!");
} else {
  console.log('Sorry, not enough money. Save more!');
}
console.log('The end!');

// This is where the else if statement comes in.
if (balance > 5000) {
  console.log("You have the money for this trip. Let's go!");
} else if (balance > 3000) {
  console.log('You only have enough money for a vacation');
} else {
  console.log('Sorry, not enough money. Save more!');
}
console.log('The end!');
