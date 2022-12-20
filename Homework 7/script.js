// TASK 1
// let win = window.open("", "", "width = 300, height = 300");

// setTimeout(function () { win.resizeTo(500, 500) }, 2000);
// setTimeout(function () { win.moveTo(200, 200) }, 4000);
// setTimeout(function () { win.close() }, 6000);


// TASK 2
// const p = document.querySelector('#text');
// const btn = document.querySelector('button');

// function changeCSS(p) {
//     p.style.color = "orange";
//     p.style.fontSize = "20px";
//     p.style.fontFamily = "Comic Sans MS";
// }

// btn.addEventListener("click", function() {
//     changeCSS(p);
// });


// TASK 3
// const body = document.querySelector("body");
// const btnClick = document.querySelector("#btn-click");
// const btnDblClick = document.querySelector("#btn-dbl-click");
// const btnHold = document.querySelector("#btn-hold");
// const hoverLink = document.querySelector("#hover-link");

// btnClick.addEventListener("click",
//     function () {
//         body.style.backgroundColor = "blue";
//     });

// btnDblClick.addEventListener("dblclick",
//     function () {
//         body.style.backgroundColor = "pink";
//     });

// btnHold.addEventListener("mousedown",
//     function () {
//         body.style.backgroundColor = "brown";
//     });
// btnHold.addEventListener("mouseup",
//     function () {
//         body.style.backgroundColor = "white";
//     });

// hoverLink.addEventListener("mouseover",
//     function () {
//         body.style.backgroundColor = "yellow";
//     });
// hoverLink.addEventListener("mouseout",
//     function () {
//         body.style.backgroundColor = "white";
//     });


// TASK 4
// const names = document.querySelector("#names");
// const deleteBtn = document.querySelector("#delete-btn");

// deleteBtn.addEventListener("click", function () {
//     names.remove(names.selectedIndex)
// })


// TASK 5
// const liveBtn = document.querySelector("#live-btn");
// const liveBtnText = document.querySelector("#live-btn-text");

// liveBtn.addEventListener("click", () => {
//     liveBtnText.insertAdjacentHTML("beforebegin", "<p>I was pressed!</p>");
// })

// liveBtn.addEventListener("mouseover", () => {
//     liveBtnText.insertAdjacentHTML("beforebegin", "<p>Mouse on me!</p>");
// })

// liveBtn.addEventListener("mouseout", () => {
//     liveBtnText.insertAdjacentHTML("beforebegin", "<p>Mouse is not on me!</p>");
// })


// TASK 6
// const coordinates = document.querySelector("#coordinates");

// let resizeListener = () => {
//     coordinates.textContent = `
//     Width: ${window.innerWidth}px, 
//     Height: ${window.innerHeight}px`;
// }

// window.addEventListener("resize", resizeListener);


// TASK 7
// const country = document.querySelector("#country");
// const cities = document.querySelector("#cities");

// const germany = { "Berlin": "", "Munich": "", "Hamburg": "", "Frankfurt": "" };
// const usa = { "New York": "", "Washington": "", "Boston": "", "Chikago": "" };
// const ukraine = { "Kyiv": "", "Lviv": "", "Kharkiv": "", "Mukachevo": "" };

// function dynamicList(obj) {
//     for (let key in obj) {
//         let option = document.createElement("option");
//         option.setAttribute('value', key);

//         let optionText = document.createTextNode(key);
//         option.appendChild(optionText);

//         cities.appendChild(option);
//     }
// }

// country.addEventListener("change", () => {
//     cities.textContent = ""

//     switch (country.selectedIndex) {
//         case 0:
//             dynamicList(germany);
//             break;

//         case 1:
//             dynamicList(usa);
//             break;
        
//         case 2:
//             dynamicList(ukraine);
//             break;
//     }
// });

// cities.addEventListener("change", () => {
//     cities.nextElementSibling.textContent = `
//     ${country.selectedOptions[0].text},
//     ${cities.selectedOptions[0].text}
//     `;
// });
