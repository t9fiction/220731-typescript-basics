"use strict";
//Basic types
let id = 5;
let company = "Numeric Sins";
let isPublished = true;
// any is a type that can be used to assign value to it of any type. first we assigned a string and then a boolean
let x = "Setting X to strings";
// x = true
//initializing a variable
let age;
//array
let ids = [4, 8, 12, 23, 13];
let arr = [1, "abc", true];
//tuple
let person = [1, 'sohail', true];
//tuple Array
let employee;
employee = [
    [1, "Worker1"],
    [2, 'Worker2'],
    [3, 'Worker3']
];
//union
let uniID;
uniID = 4;
uniID = "Sohail";
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 0] = "up";
    Direction1[Direction1["down"] = 1] = "down";
    Direction1[Direction1["left"] = 4] = "left";
    Direction1[Direction1["right"] = 5] = "right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["up"] = "up";
    Direction2["down"] = "down";
    Direction2["left"] = "";
    Direction2["right"] = "right";
})(Direction2 || (Direction2 = {}));
//Objects
console.log("ID : ", id);
console.log("Company : ", company);
console.log("x : ", x);
console.log("arr : ", arr);
console.log("person : ", person);
console.log("Employee Tuple : ", employee);
console.log("Enum : ", Direction1.up, Direction1.down, Direction1.right, Direction1);
console.log("Enum 2: ", Direction2.up, Direction2.down, Direction2.right, Direction2);
