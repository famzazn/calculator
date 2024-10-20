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

let number1 = ''; // link to button 1
let operator = ''; // link to operator button
let number2 = ''; // link to button 2
let op_track = 0;
let dis_track = 0;

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


let displayText = ''

const clear = document.querySelector(".clear");
clear.addEventListener('click', () => {
    equal.disabled = false;
    number1 = '';
    document.querySelector('.display').textContent = 0
    displayText = '';
})


const btn = document.querySelectorAll('.operator');
btn.forEach((button) => {
    button.addEventListener('click', () => {
        dis_track++;
        if (op_track === 0) {
            operator = button.textContent
            displayText += button.textContent;
            document.querySelector('.display').textContent = displayText;
            op_track++
        }

        if (dis_track === 1) {
            equal.disabled = false;
        }
    })
})


const num = document.querySelectorAll('.number');
num.forEach((button) => {
    button.addEventListener('click', () => {
        if (op_track === 0) {
            number1 += button.textContent;
            displayText += button.textContent;
            document.querySelector('.display').textContent = displayText;
        } else if (op_track === 1) {
            number2 += button.textContent;
            displayText += button.textContent;
            document.querySelector('.display').textContent = displayText;
        }
    })
})


const equal = document.querySelector('.equals')
equal.addEventListener('click', () => {
    displayText = operate(Number(number1), operator, Number(number2));
    document.querySelector('.display').textContent = displayText;
    number1 = operate(Number(number1), operator, Number(number2));
    equal.disabled = true;
    number2 = '';
    operator = '';
    op_track = 0;
    dis_track = 0;
})








