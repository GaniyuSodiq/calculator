
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

let calcContainer = document.querySelector(".container");

let input = document.querySelector("#input");

let no1 =document.querySelector("#one");
let no2 =document.querySelector("#two");
let no3 =document.querySelector("#three");
let no4 =document.querySelector("#four");
let no5 =document.querySelector("#five");
let no6 =document.querySelector("#six");
let no7 =document.querySelector("#seven");
let no8 =document.querySelector("#eight");
let no9 =document.querySelector("#nine");
let no0 =document.querySelector("#zero");

calcContainer.addEventListener("click", (event) => {
    let clicked = event.target;
    switch (clicked.id) {
        case "one":
            input.value += 1;
            break;
        case "two":
            input.value += 2;
            break;
        case "three":
            input.value += 3;
            break;
        case "four":
            input.value += 4;
            break;            
        default:
            break;
    }
})

// no1.addEventListener("click", (event) => {
//     input.value += 1;
// })