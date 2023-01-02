// TASK 2
module.exports.daytimeGreeting = (name) => {
    let html = '';
    let date = new Date();
    let hour = date.getHours();

    if (hour < 23 && hour <= 5) {
        greeting = "Good night";
    } else if (hour > 5 && hour <= 11) {
        greeting = "Good morning";
    } else if (hour > 11 && hour <= 17) {
        greeting = "Good evening"
    } else {
        greeting = "Good afternoon";
    }

    return html.innerHTML = `
    Date of request: ${date}<br>
    ${greeting}, ${name}`
}
