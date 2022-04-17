var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    //   private firstName: string;
    //   private lastName: string;
    //   private age: number;
    // This is a verbose old way to do it. We can also specify the properties directly when we write the constructor
    //   constructor(firstName: string, lastName: string, age: number) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.age = age;
    //   }
    // More succint way to do it. declare the variables in the arguments
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName, " of age ").concat(this.age);
    };
    return Person;
}());
var person = new Person("Gokul", "Rama", 31);
console.log(person.getFullName());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, firstName, lastName, age, middleName) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.id = id;
        _this.middleName = middleName;
        return _this;
    }
    Employee.prototype.getFullName = function () {
        // Since the first name and last name parameters of the parent class are private, you can't directly access them here. you can only access the public method getFullName.
        // so we can write some custom logic to have our own implementation of getFullName() or we can use protected.
        return "".concat(this.firstName, " ").concat(this.middleName, " ").concat(this.lastName);
    };
    return Employee;
}(Person));
var manager = new Employee(1, "Kane", "Williamson", 32, "Ramesh");
console.log(manager.getFullName());
