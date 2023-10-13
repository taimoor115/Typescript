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
  if(name)
    console.log(name);
  else
    console.log("Hola!!");
}

greet(null);

// Optional Chaining
type Customer = {
  birthday?: Date
};
function getCustomer( id: number): Customer | null | undefined {
  return id === 0 ? null : {birthday: new Date() };
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
log?.('a')


// Nullish Coaelscing

let speed: number | null = null

let ride = {
  // it chooses speed if it isnot null or undefined
  speed: speed ?? 20
}

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
function reject(message: string): never {
  throw new Error(message);
}
// process();
reject('Hey');
// // This function never come to this line
// console.log('Hello');
