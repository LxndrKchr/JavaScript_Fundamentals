// TASK 1
// let mentor = {
//   course: "JS fundamental",
//   duration: 3,
//   direction: "web-development",
// };

// function propsCount(obj) {
//   let count = 0;
//   for(let props in obj) {
//     count = count + 1;
//   }

//   return count;
// }

// console.log(propsCount(mentor));


// TASK 2
// let dog = {
//   name: "Lord",
//   age: 12,
//   Breed: "German Shepherd",
//   color: "black",
//   food: undefined,
// }

// function showProps(obj) {
//   console.log(Object.keys(obj));
//   console.log(Object.values(obj));
// };

// showProps(dog);


// TASK 3
// class Person {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }

//   showFullName() {
//     return this.name + " " + this.surname;
//   }
// }

// class Student extends Person {
//   constructor(name, surname, year) {
//     super(name, surname);
//     this.year = year;
//   }

//   showFullName(midleName) {
//     return super.showFullName() + " " + midleName;
//   }

//   showCourse() {
//     let currentYear = 2021;
//     let result = currentYear - this.year;

//     return result;
//   }
// }

// const stud1 = new Student("Petro", "Petrenko", 2015);

// console.log(stud1.showFullName("Petrovych"));
// console.log("Current course: " + stud1.showCourse());


// TASK 4
// class Worker {
//     #experiance = 1.2;
//     constructor(fullName, dayRate, workingDays) {
//         this.fullName = fullName;
//         this.dayRate = dayRate;
//         this.workingDays = workingDays;
//     }

//     showSalary() {
//         return this.dayRate * this.workingDays;
//     };

//     showSalaryWithExperience() {
//         return this.showSalary() * this.#experiance;
//     };

//     get getExp() {
//         return this.#experiance;
//     }

//     set setExp(value) {
//         return this.#experiance = value;
//     }
// }

// let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);
// console.log(worker1.fullName + " salary: " + worker1.showSalary());
// console.log("New experiance: " + worker1.getExp);
// console.log(worker1.fullName + " salary: " + worker1.showSalaryWithExperience());
// worker1.setExp = 1.5;
// console.log("New experiance: " + worker1.getExp);
// console.log(worker1.fullName + " salary: " + worker1.showSalaryWithExperience());

// let worker2 = new Worker("Tom Tomson", 48, 22);
// console.log(worker2.fullName);
// console.log(worker2.fullName + " salary: " + worker2.showSalary());
// console.log("New experiance: " + worker2.getExp);
// console.log(worker2.fullName + " salary: " + worker2.showSalaryWithExperience());
// worker2.setExp = 1.5;
// console.log("New experiance: " + worker2.getExp);
// console.log(worker2.fullName + " salary: " + worker2.showSalaryWithExperience());

// let worker3 = new Worker("Andy Ander", 29, 23);
// console.log(worker3.fullName);
// console.log(worker3.fullName + " salary: " + worker3.showSalary());
// console.log("New experiance: " + worker3.getExp);
// console.log(worker3.fullName + " salary: " + worker3.showSalaryWithExperience());
// worker3.setExp = 1.5;
// console.log("New experiance: " + worker3.getExp);
// console.log(worker3.fullName + " salary: " + worker3.showSalaryWithExperience());

// const workers = [];
// workers.push(worker1, worker2, worker3);
// workers.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());
// workers.forEach((elem) =>
//     console.log(`${elem.fullName}: ${elem.showSalaryWithExperience()}`)
// );


// TASK 5
// class GeometricFigure {
//     getArea() {
//         return 0;
//     };
//     toString() {
//         return Object.getPrototypeOf(this).constructor.name;
//     };
// }

// class Triangle extends GeometricFigure {
//     constructor(base, height) {
//         super();
//         this.base = base;
//         this.height = height;
//     }

//     getArea() {
//         return (this.base * this.height) / 2;
//     };
// }

// class Square extends GeometricFigure {
//     constructor(side) {
//         super();
//         this.side = side;
//     }
//     getArea() {
//         return this.side * this.side;
//     };
// }

// class Circle extends GeometricFigure {
//     constructor(radius) {
//         super();
//         this.radius = radius;
//     }

//     getArea() {
//         return Math.PI * this.radius * this.radius;
//     };
// }

// function handleFigure(figures) {
//     return figures.reduce((accumulator, currentValue) => {
//         if (currentValue instanceof GeometricFigure) {
//             console.log(`Geometric figure: ${currentValue.toString()} - area: ${currentValue.getArea()}`);
//         }
//         return accumulator + currentValue.getArea();
//     }, 0);
// }

// const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
// console.log(handleFigure(figures));