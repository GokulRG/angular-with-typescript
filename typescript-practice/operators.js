// Spread (...)
// Spreads the elements of an array or object
// Can be used to merge multiple arrays/objects into one flat array/object
// Denoted by ...
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Array
var fruits = ["🍎", "🍏", "🍇"];
var fd = ["🍕", "🍔", "🍟"];
var edibles = __spreadArray(__spreadArray([], fruits, true), fd, true);
console.log(edibles);
var usr = {
    firstName: "Gokul",
    lastName: "Rama",
    username: "GokulRama"
};
var usrDetails = __assign(__assign({}, usr), { address: "123 NE St", email: "grama@mailinator.com" });
console.log(usrDetails); // the combined object is printed out
// Using spread on a function call - Still need the optional arguments because TS can't understand the size of the array and match it with the number of arguments that a function requires.
function add(x, y, z) {
    return x + y + z;
}
var numbers = [1, 2, 3];
console.log("Sum of all the numbers", add.apply(void 0, numbers));
// Backticks
// Assume we write a regular console log statement with the user details
console.log("The user with name : " +
    usr.firstName +
    " has the address : " +
    usrDetails.address +
    " and the email of : " +
    usrDetails.email);
// the above code works, but it makes the code really messy. Let's see how we can use the backticks operator here.
console.log("The user with name : ".concat(usr.firstName, " has the address : ").concat(usrDetails.address, " and the email of : ").concat(usrDetails.email));
// The catch with backticks is that it automatically stringifies the entities. so if you wanted to console log the array object you won't be able to with backticks. you'll only
// get the stringified form of the same. This is fine for arrays with primitive types since you'll be able to see the values. But for an object.. it's only going to print [object]
// So you have to be a little wary of how you end up using this
// Destructure operator
var firstName = usr.firstName;
console.log(firstName);
// You can also use aliases when destructuring
var fName = usr.firstName, lName = usr.lastName;
console.log(fName, lName);
// array destructure
var apple = fruits[0], greenApple = fruits[1], grapes = fruits[2];
console.log(apple, greenApple, grapes);
// Rest Parameters (Var args)
// Allows us to represent an indefinite number of arguments as an array
// can only be used as a function's last parameter
// the last parameter can be prefixed with ...
// remaining arguments to the function are placed within a "standard" JS array
var justApple = edibles[0], restEdibles = edibles.slice(1);
console.log(justApple);
console.log(restEdibles);
// this can be done on objects as well, instead of the square braces we use the curly braces.
var feerstName = usr.firstName, otherDetails = __rest(usr, ["firstName"]);
console.log(feerstName);
console.log(otherDetails);
function getEdibles(apple) {
    var restEdibles = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restEdibles[_i - 1] = arguments[_i];
    }
    console.log(apple);
    console.log(restEdibles);
}
getEdibles("apple", "orange", "banana", "grapes", "watermelon");
