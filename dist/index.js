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
function reject(message) {
    throw new Error(message);
}
reject('Hey');
//# sourceMappingURL=index.js.map