// For objects, you can use the type of an interface to make the object conform to the contract of the interface
var main_manishan = {
    firstName: "Gokul",
    age: 10,
    walk: function () {
        console.log("Walking!");
    }
};
// throws error because it's readonly
// main_manishan.age = 22;
// For Classes
var Velaikkaran = /** @class */ (function () {
    function Velaikkaran() {
        this.firstName = "Kane";
        this.age = 10;
        this.walk = function () {
            console.log("Employee nadakkaraan!");
        };
    }
    return Velaikkaran;
}());
