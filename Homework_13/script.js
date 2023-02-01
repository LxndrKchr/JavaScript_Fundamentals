// TASK 1
const getPromise = (message, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}
getPromise("test promise", 2000).then(function(data) {
    console.log(data);
});


// TASK 2
