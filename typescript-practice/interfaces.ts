interface Human {
  readonly age: number;
  walk(): void;
}

interface Manishan extends Human {
  firstName: string;
  lastName?: string;
}

// For objects, you can use the type of an interface to make the object conform to the contract of the interface
const main_manishan: Manishan = {
  firstName: "Gokul",
  age: 10,
  walk: () => {
    console.log("Walking!");
  },
};

// throws error because it's readonly
// main_manishan.age = 22;

// For Classes
class Velaikkaran implements Manishan {
  firstName = "Kane";
  age = 10;
  walk = () => {
    console.log("Employee nadakkaraan!");
  };
}
