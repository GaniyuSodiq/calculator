
// A VARIABLE ONE FOR EACH PART OF THE OPERATION
let firstNumber = 0;
let operator ;
let secondNumber = 0 ;

// THE CALCULATOR WILL CONTAIN A FUNCTION OF ALL BASIC MATH
function add(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}

function substract(firstNumber, secondNumber) {
    console.log(firstNumber - secondNumber);
}

function multiply(firstNumber, secondNumber) {
    console.log(firstNumber * secondNumber);
}

function divide(firstNumber, secondNumber) {
    console.log(firstNumber / secondNumber);
}

// FUNCTION THAT CALLS THE BASIC MATH FUNCTION DEPENDING ON THE OPERATOR
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

// operate("*", 6, 2);