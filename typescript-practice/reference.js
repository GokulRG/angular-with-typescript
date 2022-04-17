// void
// Doesn't return anything
function logToConsole() {
    console.log("Hello world!");
    return; // This is returning void. This statement is as good as having no return;
}
// Array
// The strings inside the array follow the previously discussed rules in primitives.ts
var fs;
fs = ["\uD83C\uDF4E", "\uD83C\uDF4A", "\uD83C\uDF4F"];
// you can also use the generics symbol to declare the array
var food;
food = ["\uD83C\uDF55", "🍔"];
// you can also use union types
var genericArray;
genericArray = [false, "this", 1, "that", (function () { return "them"; })()];
// You can't use the regular array symbol for multiple types (it becomes a tuple) so this is one othe way you can do this
// by using union types
var unionType;
var regularArray;
regularArray = [false, "this", 1, "that", (function () { return "them"; })()];
// Tuple - Array of fixed size. The multiple types inside gives the number of elements in the tuple and the type of each element
var coordinates;
coordinates = [12, 22, 23];
// Objects
var user = {
    firstName: "Gokul",
    lastName: "Rama",
    username: "gokulrama",
    getUsername: function () { return username; }
};
// Enum
// enum DaysOfTheWeek {
//     SUNDAY,
//     MONDAY,
//     TUESDAY,
//     WEDNESDAY,
//   }
// console.log(DaysOfTheWeek.SUNDAY); Prints out 0 - Default is zero based. You can also specify your own values
var DaysOfTheWeek;
(function (DaysOfTheWeek) {
    DaysOfTheWeek["SUNDAY"] = "Sunday";
    DaysOfTheWeek["MONDAY"] = "Monday";
    DaysOfTheWeek["TUESDAY"] = "Tuesday";
    DaysOfTheWeek["WEDNESDAY"] = "Wednesday";
})(DaysOfTheWeek || (DaysOfTheWeek = {}));
console.log(DaysOfTheWeek.MONDAY); // Prints out SUNDAY
// any
// anything and everything works. Loses the benefits of TS and Intellisense.
var authorizedUser = {
    firstName: "Gokul",
    lastName: "Rama"
};
