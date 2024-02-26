let birds = ['Owl', 'Eagle', 'Parrot', 'Falcon'];

let mixedArray = ['Bird', true, 10, 5.17];

// Access the first element in the array
console.log(birds[0]); // Owl

// Access the second element in the array
console.log(birds[1]); // Eagle

// You can also assign a new value to a specific index using the assignment operator.
birds[2] = 'Vulture';
console.log(birds);

// The unshift() method can be used to add an item from the front at index 0:
let fishes = ['Salmon', 'Goldfish', 'Tuna'];
fishes.unshift('Sardine');
console.log(fishes);

// On the other hand, the shift() method can be used to remove an item from index 0:
fishes.shift();
console.log(fishes);

// The indexOf() method can be used to find and return the index of an item in the array.
let pos = fishes.indexOf('Tuna');
console.log(pos);
