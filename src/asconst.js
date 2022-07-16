"use strict";
const obj = {
    name: "mick"
};
// obj.name = "mick" // readonly
let a = "mick";
let b = 2030;
let arr = [a, b];
let f = arr[1];
f = 1;
console.log(f);
let str = "mcik";
str = null;
{
    const el = document.querySelector(".mick");
}
