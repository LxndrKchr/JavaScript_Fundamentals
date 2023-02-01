// TASK 1
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr;

console.log(x);
console.log(y);
console.log(z);


// TASK 2
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
};
let {
    names: [, name2, , name4],
    ages: [, age2, , age4]
} = data;
console.log(name2);
console.log(age2);
console.log(name4);
console.log(age4);


// TASK 3
function mul(...args) {
    const numbers = args.filter(arg => !isNaN(arg));
    if (numbers.length === 0) {
        return 0;
    }

    let sum = 1;
    for (num of numbers) {
        sum *= num;
    }

    return sum;
}
console.log(mul(1, "str", 2, 3, true));
console.log(mul(null, "str", false, true));


// TASK 4
let server = {
    data: 0,
    convertToString: function (callback) {
        callback(() => {
            return this.data + "";
        });
    }
};
let client = {
    server: server,
    result: "",
    calc: function (data) {
        this.server.data = data;
        this.server.convertToString(this.notification());
    },
    notification: function () {
        return ((callback) => {
            this.result = callback();
        });
    }
};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"


// TASK 5
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);

function mapBuilder(keysArray, valuesArray) {
    const map = new Map();

    for (let i = 0; i < keysArray.length; i++) {
        map.set(keysArray[i], valuesArray[i])
    }

    return map;
}

console.log(map.size); // 4
console.log(map.get(2)); // "span"
