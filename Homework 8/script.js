// TASK 1
// function upperCase(str) {
//     let regexp = /^[A-Z]/;
//     let result = regexp.test(str);
//     if (result) {
//         console.log("String's starts with uppercase character");
//     } else {
//         console.log("String's not starts with uppercase character");
//     }
// }

// upperCase('regexp');
// upperCase('RegExp');


// TASK 2
// function checkEmail(str) {
//     let regexp = /(\S+)@(\S+)\.(\S+)/;
//     if (regexp.test(str) === true) {
//         console.log("Email is correct!")
//     } else {
//         console.log("Email is not correct!")
//     }
// }

// checkEmail("Qmail2@gmail.com");
// checkEmail("Qmail2@gmail");


// TASK 3
// let str = "cdbBdbsbz";
// let regexp = /d(b+)(d)/gi;
// let result = regexp.exec(str);

// console.log(result);


// TASK 4
// let str  = "Java Script";
// let result = str.replace(/(\w+)\s(\w+)/, "$2, $1");

// console.log(result);


// TASK 5
// function cardValidator(value) {
//     let regexp = /^([0-9]{4})\-([0-9]{4})\-([0-9]{4})\-([0-9]{4})$/g;
//     let result = regexp.test(value);
//     if (result) {
//         console.log("Card number is valid");
//     } else {
//         console.log("Invalid card number");
//     }
// }

// cardValidator("9999-9999-9999-9999");
// cardValidator("9999-9999-9999-9999-9999");


// TASK 6
// function checkEmail(str) {
//     let regexp = /^([A-Za-z0-9]+[A-Za-z0-9]*\_?\-?)+@([A-Za-z])+\.([A-Za-z])+$/;
//     let result = regexp.test(str);
//     if (result) {
//         console.log("Email is correct!")
//     } else {
//         console.log("Email is not correct!")
//     }
// }

// checkEmail('my_mail@gmail.com');
// checkEmail('#my_mail@gmail.com');
// checkEmail('my_ma--il@gmail.com');


// TASK 7
// function checkLogin(str) {
//     let regexp = /^[a-z]{1}[0-9a-z\.]{1,9}$/gi;
//     let result = regexp.test(str);
//     let numbers = str.match(/\d(\.\d)?/g);
//     console.log(result);
//     console.log(numbers);
// }

// checkLogin("ee1.1ret3");
// checkLogin("ee1*1ret3");
