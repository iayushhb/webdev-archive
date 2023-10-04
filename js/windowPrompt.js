// let username = window.prompt("What's your name? : ");
// console.log(username);

// document.getElementById("myTxt").innerHTML = "Hello " + username;
let username;
document.getElementById("myButton").onclick = function () {
    username = document.getElementById("myTxt").value;
    console.log(username);
};