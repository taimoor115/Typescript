"use strict";
var _a;
let sales = 123456789;
let course = "TypeScript";
let isPublished = true;
let level;
level = 12;
level = "Any mean any type but we loose typescript major feature";
const arr = [1, 2, 3, 4];
let tuple = [12, "Taimoor", true];
tuple.push(1);
tuple[1].charAt(0);
let graph = [1.2, 4.1];
let [x, y] = graph;
const vehicles = ["Bolan", "BMW", "Ford"];
const [van, car, truck] = vehicles;
console.log(van);
const small = 1;
const medium = 2;
const large = 3;
let mySize = "m";
console.log(mySize);
function sum(c, d) {
    if (d > 0)
        return c + d;
    return c + d;
}
console.log(sum(1, 2));
function sum2(a, b, ...rest) {
    return a + b + rest.reduce((p, c) => p + c);
}
console.log(sum2(10, 20, 30, 40, 50));
let employee = {
    id: 1,
    name: "Taimoor",
    retire: (date) => {
        console.log(date);
    },
};
function KgtoLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 50;
function greet(name) {
    if (name)
        console.log(name);
    else
        console.log("Hola!!");
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log('a');
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 20
};
class Account {
    constructor(id, name, _balance) {
        this.id = id;
        this.name = name;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            console.log("Error");
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0) {
            throw new Error('Invalid Value');
        }
        this._balance = value;
    }
}
let object1 = new Account(1, 'Taimoor', 0);
object1.deposit(100);
console.log(object1.balance);
object1.balance = 1;
console.log(object1 instanceof Account);
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = "Taimoor";
seats.A2 = "Qasim";
class Ride {
    start() { Ride._activeRides++; }
    ;
    stop() { Ride._activeRides--; }
    ;
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    meet() {
        console.log('Meeting');
    }
}
class Principal extends Person {
    get fullName() {
        return 'Principal ' + super.fullName;
    }
}
class Teacher extends Person {
    get fullName() {
        return 'Professor ' + super.fullName;
    }
}
printPeople([
    new Student(2, "Taimoor", "Hussain"),
    new Teacher('Ishaq', 'Khan'),
    new Principal("John", 'Smith')
]);
function printPeople(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
let student = new Student(1, 'Taimoor', "Hussain");
console.log(student.fullName);
let teacher = new Teacher('Qaim', 'Hafiz');
console.log(teacher.fullName);
//# sourceMappingURL=index.js.map