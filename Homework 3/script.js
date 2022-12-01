// TASK 1
// const arr = [2, 3, 4, 5];
// let result = 1;

// for (let i = 0; i < arr.length; i++) {
//   result *= arr[i];
// }

// let i = 0;
// while (i < arr.length) {
//   result *= arr[i];
//   i++;
// }

// console.log(result);


// TASK 2
// for (let i = 0; i < 15; i++) {
//   if (i % 2 === 0) {
//     console.log(i + " is even.");
//   } else {
//     console.log(i + " is odd.");
//   }
// }


// TASK 3
// function randArray(k) {
//   let arr = [];
//   for (let i = 0; i < k; i++) {
//     arr.push(Math.floor((Math.random() * 500) + 1));
//   }
//   console.log(arr);
// }

// randArray(5);


// TASK 4
// function raiseToDegree(a, b) {
//   if (Number.isInteger(a) && Number.isInteger(b)) {
//     console.log(a ** b);
//   } else {
//     console.log("Incorrect data");
//   }
// }

// let num = +prompt("Enter a number", 3);
// let deg = +prompt("Enter a degre", 4);

// raiseToDegree(num, deg);


// TASK 5
// function findMin() {
//     let min = arguments[0];

//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] < min) {
//             min = arguments[i];
//         }
//     }

//     console.log(min);
// }

// findMin(12, 14, 4, -4, 0.2);


// TASK 6
// function findUnique(arr) {
//     let newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if(!newArr.includes(arr[i])) {
//             newArr.push(arr[i])
//         }
//     }

//     console.log(newArr.length === arr.length);
// }

// findUnique([1, 2, 3, 5, 3]); 
// findUnique([1, 2, 3, 5, 11]);


// TASK 7
// function lastElem(a, b) {
//     let newArr = [];
//     newArr = a.slice(-b || -1);

//     return newArr;
// } 

// console.log(lastElem([3, 4, 10, -5]));      // -5
// console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
// console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]


// TASK 8
// function capitalizeLetters(str) {
//     let splitStr = str.split(' ');

//     for (let i = 0; i < splitStr.length; i++) {
//         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1); 
//     }

//     return splitStr.join(' ');
// }

// console.log(capitalizeLetters("i love java script"));