var counter = 1;

function printCounter() {
    console.clear()  // clears console with every iteration
    console.log(counter);
    counter = counter + 1;
}

setInterval(printCounter, 1000)  // sets milli n-second to execute the function once