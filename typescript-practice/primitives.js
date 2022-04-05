// Booleans
var authorized;
// All the below values are valid boolean values.
authorized = false;
authorized = true;
authorized = null;
authorized = undefined;
// These functions should be IIFEs. the boolean variable can't hold a function
authorized = (function () { return true; })();
// Numbers
var myNumber;
myNumber = 10;
myNumber = -10;
myNumber = 10.1;
myNumber = -10.1;
myNumber = 10;
myNumber = 0x123;
myNumber = 83;
// These functions should be IIFEs. the number variable can't hold a function
myNumber = (function () { return 123; })();
myNumber = null;
myNumber = undefined;
// String
var username;
username = "GokulRama";
username = "GokulRama";
username = "GokulRama";
username = "GokulRama".toLowerCase();
username = (function () { return "GokulRama"; })();
username = null;
username = undefined;
// null / undefined. Same rule applies for both
var data;
data = null;
data = undefined;
data = (function () { return null; })();
data = (function () { return undefined; })();
