// TASK 1
// function calcRectangleArea(w, h) {
//   if (isNaN(w) || isNaN(h)) {
//     throw new Error("Wrong values");
//   }
//   return w * h;
// }

// try {
//   console.log(calcRectangleArea(11, 11));
// } catch (error) {
//   console.log(error.message);
// }

// TASK 2
// function checkAge() {
//   let age = prompt("Enter your age", 14);

//   if (age.length === 0) {
//     throw new Error("The field is empty!");
//   } else if (isNaN(age)) {
//     throw new Error("Incorrect data");
//   } else if (age < 14) {
//     throw new Error("You are to yong");
//   }

//   return age;
// }

// try {
//   let result = checkAge();
//   alert("Your age " + result);
// } catch (e) {
//   alert(e.message);
// }

// TASK 3
// class MonthExeption {
//   constructor(message) {
//     this.name = "MonthExeption";
//     this.message = message;
//   }
// }

// function showMonthName(month) {
//   const date = new Date();

//   if (month > 12 || month < 0) {
//     throw new MonthExeption("Incorrect month number");
//   }

//   date.setMonth(month - 1);

//   return date.toLocaleString("en-US", { month: "long" });
// }

// try {
//   console.log(showMonthName(5));
//   console.log(showMonthName(14));
//   console.log(showMonthName(-1));
// } catch (e) {
//   console.log(e.name, e.message);
// }

// TASK 4
// function showUser(id) {
//   let user = { id: id };

//   if (id < 0) {
//     throw new Error("ID must not be negative: " + id);
//   }

//   return user;
// }

// function showUsers(ids) {
//   let users = [];

//   for (i = 0; i < ids.length; ++i) {
//     try {
//       users.push(showUser(ids[i]));
//     } catch (e) {
//       console.log(e.name, e.message);
//     }
//   }

//   return users;
// }

// console.log(showUsers([7, -12, 44, 22]));
