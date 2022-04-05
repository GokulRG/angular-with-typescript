// void
// Doesn't return anything
function logToConsole(): void {
  console.log("Hello world!");
  return; // This is returning void. This statement is as good as having no return;
}

// Array
// The strings inside the array follow the previously discussed rules in primitives.ts
let fruits: string[];
fruits = [`🍎`, `🍊`, `🍏`];

// you can also use the generics symbol to declare the array
let food: Array<string>;
food = [`🍕`, "🍔"];

// you can also use union types
let genericArray: Array<string | number | boolean>;
genericArray = [false, "this", 1, `that`, (() => "them")()];

// You can't use the regular array symbol for multiple types (it becomes a tuple) so this is one othe way you can do this
// by using union types
let unionType: string | number | boolean;
let regularArray: typeof unionType[];
regularArray = [false, "this", 1, `that`, (() => "them")()];

// Tuple - Array of fixed size. The multiple types inside gives the number of elements in the tuple and the type of each element
let coordinates: [number, number, number];
coordinates = [12, 22, 23];

// Objects
let user = {
  firstName: "Gokul",
  lastName: "Rama",
  username: "gokulrama",
  getUsername: (): string => username,
};

// Enum
// enum DaysOfTheWeek {
//     SUNDAY,
//     MONDAY,
//     TUESDAY,
//     WEDNESDAY,
//   }

// console.log(DaysOfTheWeek.SUNDAY); Prints out 0 - Default is zero based. You can also specify your own values

enum DaysOfTheWeek {
  SUNDAY = "Sunday",
  MONDAY = "Monday",
  TUESDAY = "Tuesday",
  WEDNESDAY = "Wednesday",
}

console.log(DaysOfTheWeek.MONDAY); // Prints out SUNDAY

// any
// anything and everything works. Loses the benefits of TS and Intellisense.
let authorizedUser: any = {
  firstName: "Gokul",
  lastName: "Rama",
};
