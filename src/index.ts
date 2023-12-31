// console.log("Hello");
// // "preLaunchTask": "tsc: build - tsconfig.json",
// let age: number = 20
// if(age > 15)
//   age += 5;

let sales = 123_456_789;
let course = "TypeScript";
let isPublished = true;
let level; //any

level = 12;
level = "Any mean any type but we loose typescript major feature";

// function render(document: any) { // as we see error but we can fix using any but we loose typescript property
//   console.log('Hello');

// }

// Arrays

const arr: number[] = [1, 2, 3, 4];

// arr.forEach(n => n.toString) // we get all built function of number

// Tuples
// A tuple is a typed array with a pre-defined length and types for each index.

let tuple: [number, string, boolean] = [12, "Taimoor", true];
tuple.push(1); // as you see it shows no error this is the gap in typescript
tuple[1].charAt(0); // each index will enable each type built in method

// Always try to make readonly tuple this will give you error if you push method
// const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');

// Destructure
let graph: [number, number] = [1.2, 4.1];
let [x, y] = graph;

const vehicles: [string, string, string] = ["Bolan", "BMW", "Ford"];
const [van, car, truck] = vehicles;
console.log(van);

// ENUM
// An enum is a special "class" that represents a group of constants (unchangeable variables).
const small = 1;
const medium = 2;
const large = 3;

// enum Size { Small = 1, Medium, Large};
// let mySize: Size = Size.Medium;
// console.log(mySize);
// We can change the value to

const enum Size {
  Small = "s",
  Medium = "m",
  Large = "l",
}
let mySize: Size = Size.Medium;
console.log(mySize);

// Functions

function sum(c: number, d: number): number {
  if (d > 0) return c + d;
  return c + d;
}

console.log(sum(1, 2));

function sum2(a: number, b: number, ...rest: number[]): number {
  return a + b + rest.reduce((p, c) => p + c);
}
console.log(sum2(10, 20, 30, 40, 50));

// Type Aliases
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

// Objects

let employee: Employee = {
  id: 1,
  name: "Taimoor",
  retire: (date: Date) => {
    console.log(date);
  },
};

// Narrowing + Union
// The process of refining types to more specific types than declared is called narrowing.

function KgtoLbs(weight: number | string): number {
  // weight.  Narrowing
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

// Type Intersection

type Dragable = {
  drag: () => void;
};
type Resize = {
  resize: () => void;
};

type UI = Dragable & Resize;

let textBox: UI = {
  drag: () => {},
  resize: () => {},
};

// Literals

// let quantity : 50 | 100 = 50;
type Quantity = 50 | 100;
let quantity: Quantity = 50;

// Nullable

function greet(name: string | null | undefined): void {
  if (name) console.log(name);
  else console.log("Hola!!");
}

greet(null);

// Optional Chaining
type Customer = {
  birthday?: Date;
};
function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
// if(customer !== null && customer !== undefined )
// optional property access operator
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// if(customer !== null && customer !== undefined)
//       customer[0]

// customer?.[0]

// Optional Call Element
let log: any = null;
log?.("a");

// Nullish Coaelscing

let speed: number | null = null;

let ride = {
  // it chooses speed if it isnot null or undefined
  speed: speed ?? 20,
};

// Type Assertion

// we use type assertion where user know more about types than compiler
// Two ways to achieve
// let phones = document.getElementById('phone') as HTMLInputElement;
// let mobiles = <HTMLInputElement> document.getElementById('mobiles');

// Unknown
// function render(document: unknown) {

//   // as we see below if we use any in parameters no check in built in function
//   // document.move()
//   // document.whatEverWeWant();
//   // so we use unknown keyword it shows error in that case if no built in function is used
// }

// Never
// It represents that values that never occur

// function process(): never {
//   while(true) {}
// }
// function reject(message: string): never {
// throw new Error(message);
// }
// process();
// reject('Hey');
// // This function never come to this line
// console.log('Hello');

class Account {
  // readonly id: number;
  // name: string;
  // private _balance: number;
  nickname?: string; //optional

  constructor(
    public readonly id: number,
    public name: string,
    private _balance: number
  ) {
    // this.id = id;
    // this._balance = balance;
    // this.name = name;
  }

  deposit(amount: number): void {
    if (amount <= 0) console.log("Error");

    this._balance += amount;
  }

  get balance(): number {
    return this._balance;
  }
  set balance(value: number) {
    if (value < 0) {
      throw new Error("Invalid Value");
    }
    this._balance = value;
  }
}

let object1 = new Account(1, "Taimoor", 0);
object1.deposit(100);
console.log(object1.balance);
object1.balance = 1;
console.log(object1 instanceof Account);

class SeatAssignment {
  // A1 A2 ...
  // Taimoor Qasim
  // Below called Index signature property which allow us to index dynamically
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
// seats['A1'] = "Taimoor";
seats.A1 = "Taimoor";
// Uper two are identitical
seats.A2 = "Qasim";

// Static
class Ride {
  private static _activeRides: number = 0;
  start() {
    Ride._activeRides++;
  }
  stop() {
    Ride._activeRides--;
  }

  static get activeRides() {
    return Ride._activeRides;
  }
}

// Now we make a single varaible that keep track of the active rides using static, private
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  meet() {
    console.log("Meeting");
  }
}

class Principal extends Person {
  override get fullName() {
    return "Principal " + super.fullName;
  }
}
class Teacher extends Person {
  override get fullName() {
    return "Professor " + super.fullName;
  }
}
printPeople([
  new Student(2, "Taimoor", "Hussain"),
  new Teacher("Ishaq", "Khan"),
  new Principal("John", "Smith"),
]);
function printPeople(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}
// Open Closed principal
// classes open for extension but closed for modification
// Private key word is not inherited but protected keyword is inherited
let student = new Student(1, "Taimoor", "Hussain");
console.log(student.fullName);
let teacher = new Teacher("Qaim", "Hafiz");
console.log(teacher.fullName);

// Abstaction

abstract class Shape {
  constructor(public color: string) {}
  abstract render(): void;
}
class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }
  override render(): void {
    console.log("Circle is rendering");
  }
}

// Interfaces
// abstract class Calender {
//   constructor(public name: string) {}
//   abstract addEvent():void;
//   abstract removeEvent(): void;
// }

interface Calender {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

interface CloudCalender extends Calender {
  sync(): void;
}
class GoogleCalender implements Calender {
  constructor(public name: string) {}
  addEvent(): void {
    throw new Error("Method not implemented.");
  }
  removeEvent(): void {
    throw new Error("Method not implemented.");
  }
}

// Generics
// Without generics we have to generate different classes for different type of key value like number and string
// Generics classes
class KeyValue<K, V> {
  constructor(public key: K, public value: V) {}
}
let key1 = new KeyValue<number, string>(1, "hey");
// Generics
function wrapInArray<T>(value: T) {
  return [value];
}
// wrap array var become array of any type you gave
let wrapArray = wrapInArray("1");

// Interfaces generics
// http://www.web.com.users
// http://www.web.com.products

interface Result<T> {
  data: T | null;
  error: string | null;
}
function fetch<T>(url: string): Result<T> {
  return { data: null, error: null };
}

interface User {
  name: string;
}
interface Products {
  details: string;
}

let result = fetch<User>("hello");
result.data?.name;

// // Generics constraints
// function echo<T extends string | number > (value: T): T {
//   return value;
// }
// echo(true)
// echo(1);

// function echo<T extends {name: string}> (value: T): T {
//   return value;
// }
// echo({name:"Taimoor"})

interface Human {
  name: string;
}

function echo<T extends Human>(value: T): T {
  return value;
}
echo({ name: "Taimoor" });

interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];
  add(obj: T): void {
    this._objects.push(obj);
  }

  // T is product
  // keyof T => 'name' | 'price'
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}

let store = new Store<Product>();
store.add({ name: "Potato", price: 100 });
store.find("name", "Potato");
store.find("price", 100);
// store.find('anything', '100')
// Pass on generic type parameter
class Compressiable<T> extends Store<T> {
  compress(): void {}
}
let compress = new Compressiable<Product>();
// compress.add();

// Restrict the generic type parameter
class Searchable<T extends { name: string }> extends Store<T> {
  // find(name: string): T | undefined {
  //   return this._objects.find(obj => object1.name === name);
  // }
}
// Fix the generic type parameter
class ProductStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    return [];
  }
}
// Type mapping
interface Car {
  engine: string;
  name: string;
}

type ReadOnly<T> = {
  // index signature
  // keyof
  readonly [K in keyof T]: T[K];
};
type Optional<T> = {
  readonly [K in keyof T]?: T[K];
};

type Nullablel<T> = {
  readonly [K in keyof T]: T[K] | null;
};
let product: ReadOnly<Car> = {
  engine: "turbo",
  name: "BMW",
};
// product.engine = 'hey'

type ComponentOptions = {
  selector: string;
}
function Component(options: ComponentOptions) {
  return (constructor : Function) => {
    console.log('decorator');
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.options = options;
    constructor.prototype.insertInDOM = () => {
      console.log(constructor);
    }
  }

}
// @Component({ selector: '#my-profile'})
class ProfileComponent {}

export class CircleClass {
  constructor(public radius: number) {}
}
