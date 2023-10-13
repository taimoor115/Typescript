// console.log("Hello");
// // "preLaunchTask": "tsc: build - tsconfig.json",
// let age: number = 20
// if(age > 15)
//   age += 5;

let sales = 123_456_789
let course = "TypeScript"
let isPublished = true;
let level; //any

level = 12;
level = "Any mean any type but we loose typescript major feature"

// function render(document: any) { // as we see error but we can fix using any but we loose typescript property
//   console.log('Hello');

// }

// Arrays

const arr: number[] = [1,2,3,4];

// arr.forEach(n => n.toString) // we get all built function of number

// Tuples
// A tuple is a typed array with a pre-defined length and types for each index.

let tuple: [number, string, boolean] = [12, 'Taimoor', true];
tuple.push(1); // as you see it shows no error this is the gap in typescript
tuple[1].charAt(0); // each index will enable each type built in method

// Always try to make readonly tuple this will give you error if you push method
// const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');

// Destructure
let graph: [number, number] = [1.2, 4.1];
let [x,y] = graph;

const vehicles: [string, string, string] = ['Bolan', 'BMW', 'Ford'];
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

const enum Size { Small = 's', Medium = 'm', Large = 'l'};
let mySize: Size = Size.Medium;
console.log(mySize);


// Functions

function sum(c: number, d: number): number {
    if(d > 0)
    return c + d;
    return c + d;
}

console.log(sum(1,2));
