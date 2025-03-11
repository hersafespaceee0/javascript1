console.log(new Date().toLocaleDateString());
console.log(new Date().toLocaleTimeString());
console.log(new Date().toUTCString());

//KNOWING Users/clients timezone
const date = new Date();

//use Intl.DateTimeFormat to get the new time zone
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

console.log("Time Zone:", timeZone); //Africa/Nairobi

//formatting dates and time using Date object

//12-03-2025
//Tue 03 March 25

const receivedDate = new Date("13/03/2025");

console.log(receivedDate.getFullYear());
console.log(receivedDate.getMonth()); //0 january - 11 december
console.log(receivedDate.getDate()); // 1
console.log(receivedDate.getDay()); //Day of the week from 0 sunday - 6 saturday

