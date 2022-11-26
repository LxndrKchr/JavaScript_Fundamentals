// TASK 1
// let x = 1;
// let y = 2;

// let res1 = String(x) + y;
// console.log(res1); // "12"
// console.log(typeof res1); // "string"

// let res2 = Boolean(x) + String(y);
// console.log(res2); // "true2"
// console.log(typeof res2); // "string"

// let res3 = x < y;
// console.log(res3); // true
// console.log(typeof res3); // "boolean"

// let res4 = parseInt(x > y);
// console.log(res4); // NaN
// console.log(typeof res4); // "number"


// TASK 2
// let num = +prompt("Enter a number", 0);

// if (num % 2 === 0 && num >= 0) {
//     console.log("Number " + num + " is even.");
// } else {
//     console.log("Incorrect value");
// }

// if (num % 7 === 0 && num > 0) {
//     console.log("Number " + num + " is multiple of 7.");
// } else {
//     console.log("Number " + num + " is not multiple of 7.");
// }


// TASK 3
// const arr = [];
// arr[0] = 1;
// arr[1] = "string";
// arr[2] = true;
// arr[3] = null;
// console.log(arr.length);
// arr[4] = prompt("Enter a value");
// console.log(arr[4]);
// arr.shift();
// console.log(arr);


// TASK 4
// let cities = ["Rome", "Lviv", "Warsaw"];
// console.log(cities.join('*'));


// TASK 5
// let isAdult = +prompt("Are you adult?", 0);

// if (isAdult >= 18){
//     console.log("Ви досягли повнолітнього віку");
// } else {
//     console.log("Ви ще надто молоді");
// }


// TASK 6
// let a = +prompt("Enter side A", 0);
// let b = +prompt("Enter side B", 0);
// let c = +prompt("Enter side C", 0);

// function isValidDate(a) {
//   return !isNaN(a) && a > 0;
// }

// function calcArea(a, b, c) {
//   let s = (a + b + c) / 2;
//   let area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));
//   console.log(area.toFixed(3));
// }

// function rightTriangleCheck(a, b, c) {
//   if (
//     a ** 2 + b ** 2 == c ** 2 ||
//     a ** 2 + c ** 2 == b ** 2 ||
//     c ** 2 + b ** 2 == a ** 2
//   ) {
//     console.log("Трикутник прямокутний");
//   } else {
//     console.log("Трикутник не прямокутний");
//   }
// }

// if (isValidDate(a) && isValidDate(b) && isValidDate(c)) {
//   calcArea(a, b, c);
//   rightTriangleCheck(a, b, c);
// } else {
//   console.log("Incorrect data");
// }


// TASK 7
// const date = new Date();
// let hour = date.getHours();

// switch (true) {
//     case (hour < 23 && hour <= 5):
//         console.log("Доброї ночі");
//         break;
//     case (hour > 5 && hour <= 11):
//         console.log("Доброго ранку");
//         break;
//     case (hour > 11 && hour <= 17):
//         console.log("Доброго дня");
//         break;
//     default: console.log("Доброго вечора");
//         break;
// }

// if (hour < 23 && hour <= 5) {
//     console.log("Доброї ночі");
// } else if (hour > 5 && hour <= 11) {
//     console.log("Доброго ранку");
// } else if (hour > 11 && hour <= 17) {
//     console.log("Доброго дня");
// } else {
//     console.log("Доброго вечора");
// }
