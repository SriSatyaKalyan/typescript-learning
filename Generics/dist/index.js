"use strict";
const nums = [];
const colors = [];
function identity(item) {
    return item;
}
function getRandomElement(list) {
    const randIndx = Math.floor(Math.random() * list.length);
    return list[randIndx];
}
// console.log(getRandomElement<string>(["a", "b", "c"]));
// console.log(getRandomElement<number>([3, 56, 343, 2323, 565, 76]));
