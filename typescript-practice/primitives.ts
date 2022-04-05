// Booleans
let authorized: boolean;

// All the below values are valid boolean values.
authorized = false;
authorized = true;
authorized = null;
authorized = undefined;
// These functions should be IIFEs. the boolean variable can't hold a function
authorized = (() => true)();

// Numbers
let myNumber: number;
myNumber = 10;
myNumber = -10;
myNumber = 10.1;
myNumber = -10.1;
myNumber = 0b1010;
myNumber = 0x123;
myNumber = 0o123;
// These functions should be IIFEs. the number variable can't hold a function
myNumber = (() => 123)();
myNumber = null;
myNumber = undefined;

// String
let username: string;
username = "GokulRama";
username = "GokulRama";
username = `GokulRama`;
username = "GokulRama".toLowerCase();
username = (() => "GokulRama")();
username = null;
username = undefined;

// null / undefined. Same rule applies for both
let data: null;
data = null;
data = undefined;
data = (() => null)();
data = (() => undefined)();
