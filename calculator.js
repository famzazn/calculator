const add = function(x, y) {
    return x + y;
}

const subtract = function(x, y) {
    return x - y;
}

const multiply = function(x, y) {
    return x * y;
}

const divide = function(x, y) {
    return x / y;
}

let number1; // link to button 1
let operator; // link to operator button
let number2; // link to button 2

const operate = function(number1, operator, number2) {
    if (operator === '+') {
        return add(number1, number2);
    } else if (operator === '-') {
        return subtract(number1, number2);
    } else if (operator === '*') {
        return multiply(number1, number2);
    } else if (operator === '/') {
        return divide(number1, number2);
    }

}

console.log(operate(6, "-", 9))

let displayText = ''

const clear = document.querySelector(".clear");
clear.addEventListener('click', () => {
    document.querySelector('.display').textContent = ""
    displayText = '';
})



const btn = document.querySelectorAll('.digits button, .operation button');
btn.forEach((button) => {
    button.addEventListener('click', () => {
        displayText += button.textContent;
        document.querySelector('.display').textContent = displayText;
    })
})

const equal = document.querySelector('.equals')
equal.addEventListener('click', () => {
    displayText += '=' + operate()               
})

//Need to somehow make number input go into operate function