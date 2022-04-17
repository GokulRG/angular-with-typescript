class Person {
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
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected age: number
  ) {}

  getFullName(): string {
    return `${this.firstName} ${this.lastName} of age ${this.age}`;
  }
}

const person: Person = new Person("Gokul", "Rama", 31);
console.log(person.getFullName());

class Employee extends Person {
  constructor(
    private id: number,
    firstName: string,
    lastName: string,
    age: number,
    private middleName: string
  ) {
    super(firstName, lastName, age);
  }

  getFullName(): string {
    // Since the first name and last name parameters of the parent class are private, you can't directly access them here. you can only access the public method getFullName.
    // so we can write some custom logic to have our own implementation of getFullName() or we can use protected.
    return `${this.firstName} ${this.middleName} ${this.lastName}`;
  }
}

const manager: Person = new Employee(1, "Kane", "Williamson", 32, "Ramesh");
console.log(manager.getFullName());
