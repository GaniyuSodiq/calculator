
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

// let no1 =document.querySelector("#one");
// let no2 =document.querySelector("#two");
// let no3 =document.querySelector("#three");
// let no4 =document.querySelector("#four");
// let no5 =document.querySelector("#five");
// let no6 =document.querySelector("#six");
// let no7 =document.querySelector("#seven");
// let no8 =document.querySelector("#eight");
// let no9 =document.querySelector("#nine");
// let no0 =document.querySelector("#zero");

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
        case "five":
            input.value += 5;
            break;
        case "six":
            input.value += 6;
            break;
        case "seven":
            input.value += 7;
            break;
        case "eight":
            input.value += 8;
            break;   
        case "nine":
            input.value += 9;
            break;
        case "zero":
            input.value += 0;
            break;
        case "add":
            input.value += "+";
            break;
        case "substract":
            input.value += "-";
            break;
        case "multiply":
            input.value += "*";
            break;
        case "divide":
            input.value += "/";
            break;
        case "dot":
            input.value += ".";
            break;
        case "equals":
            input.value += "=";
            break;
        case "clear":
            input.value = "";
            break;
        case "two":
            input.value += 2;
            break;
        case "percentage":
            input.value += "%";
            break;
        // case "four":
        //     input.value += 4;
        //     break;
        // case "five":
        //     input.value += 5;
        //     break;
        // case "six":
        //     input.value += 6;
        //     break;
        // case "seven":
        //     input.value += 7;
        //     break;
        // case "eight":
        //     input.value += 8;
        //     break;         
        default:
            break;
    }
})

// no1.addEventListener("click", (event) => {
//     input.value += 1;
// })