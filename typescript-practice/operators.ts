// Spread (...)
// Spreads the elements of an array or object
// Can be used to merge multiple arrays/objects into one flat array/object
// Denoted by ...

// Array
let fruits: string[] = ["🍎", "🍏", "🍇"];
let fd: string[] = ["🍕", "🍔", "🍟"];

let edibles = [...fruits, ...fd];
console.log(edibles);

let usr = {
  firstName: "Gokul",
  lastName: "Rama",
  username: "GokulRama",
};

let usrDetails = {
  ...usr,
  address: "123 NE St",
  email: "grama@mailinator.com",
};

console.log(usrDetails); // the combined object is printed out

// Using spread on a function call - Still need the optional arguments because TS can't understand the size of the array and match it with the number of arguments that a function requires.
function add(x?: number, y?: number, z?: number) {
  return x + y + z;
}

let numbers: number[] = [1, 2, 3];

console.log("Sum of all the numbers", add(...numbers));

// Backticks
// Assume we write a regular console log statement with the user details
console.log(
  "The user with name : " +
    usr.firstName +
    " has the address : " +
    usrDetails.address +
    " and the email of : " +
    usrDetails.email
);

// the above code works, but it makes the code really messy. Let's see how we can use the backticks operator here.
console.log(
  `The user with name : ${usr.firstName} has the address : ${usrDetails.address} and the email of : ${usrDetails.email}`
);

// The catch with backticks is that it automatically stringifies the entities. so if you wanted to console log the array object you won't be able to with backticks. you'll only
// get the stringified form of the same. This is fine for arrays with primitive types since you'll be able to see the values. But for an object.. it's only going to print [object]
// So you have to be a little wary of how you end up using this

// Destructure operator

let { firstName } = usr;
console.log(firstName);

// You can also use aliases when destructuring
let { firstName: fName, lastName: lName } = usr;
console.log(fName, lName);

// array destructure
let [apple, greenApple, grapes] = fruits;
console.log(apple, greenApple, grapes);

// Rest Parameters (Var args)
// Allows us to represent an indefinite number of arguments as an array
// can only be used as a function's last parameter
// the last parameter can be prefixed with ...
// remaining arguments to the function are placed within a "standard" JS array

let [justApple, ...restEdibles] = edibles;
console.log(justApple);
console.log(restEdibles);

// this can be done on objects as well, instead of the square braces we use the curly braces.
let { firstName: feerstName, ...otherDetails } = usr;
console.log(feerstName);
console.log(otherDetails);

function getEdibles(apple, ...restEdibles) {
  console.log(apple);
  console.log(restEdibles);
}

getEdibles("apple", "orange", "banana", "grapes", "watermelon");
