let getDateTime = new Date();
let gettingHour = getDateTime.getHours()

let user = prompt('Please enter your name')


let message
if (gettingHour >= 6 && gettingHour <= 11) {
 message = "Good Morning"
}
else if (gettingHour >= 12 && gettingHour <= 17) {
 message = "Good Afternoon"
}
else if (gettingHour >= 18 && gettingHour <= 20) {
 message = "Good Evening"
}
else if (gettingHour >= 21 && gettingHour <= 5) {
 message = "Good Night"
}
document.getElementById("demo").innerHTML = message + ', ' + user;
console.log(message)
