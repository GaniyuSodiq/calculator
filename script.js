let firstNumber = 0;
let operator ;
let secondNumber = 0 ;


function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function substract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}


function operate(operator, firstNumber, secondNumber) {
    if (operator === "+") {
       return add(firstNumber, secondNumber);
    }

    if (operator === "-") {
        return substract(firstNumber, secondNumber);
    }

    if (operator === "*") {
        return multiply(firstNumber, secondNumber);
    }

    if (operator === "/") {
        return divide(firstNumber, secondNumber);
    }
}

