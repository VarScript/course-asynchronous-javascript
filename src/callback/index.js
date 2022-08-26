function sum(num1, num2) {
    return num1 + num2;
} 

function calc(num1, num2, sumNumbers) {
    return sumNumbers(num1, num2)
}

console.log(calc(2, 2, sum));
// -> 4


// --


function greeting(name) {
return `Hi ${name}`;
}

function processName(name, callback) {
return callback(name);
}

console.log(processName('Fabio', greeting));
// -> Hi Fabio


// --

// Receives  function, argument and time
setTimeout(() => {
    console.log('Hi JavaScript')
}, 5000);
// -> (in 5 seconds) Hi JavaScript


// -- 

function greeting (name) {
    console.log(`Hi ${name}`)
};

// setTimeout(greeting, 2000, 'Fabio')

setTimeout(() => {
    return greeting('Fabio');
}, 1000)