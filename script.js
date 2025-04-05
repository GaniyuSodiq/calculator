
// A VARIABLE ONE FOR EACH PART OF THE OPERATION
let firstNumber = 0;
let operator ;
let secondNumber = 0 ;
let equality;

// THE CALCULATOR WILL CONTAIN A FUNCTION OF ALL BASIC MATH
function add(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
    return (firstNumber + secondNumber);

}

function substract(firstNumber, secondNumber) {
    console.log(firstNumber - secondNumber);
    return (firstNumber - secondNumber);
}

function multiply(firstNumber, secondNumber) {
    console.log(firstNumber * secondNumber);
    return (firstNumber * secondNumber);
}

function divide(firstNumber, secondNumber) {
    console.log(firstNumber / secondNumber);
    return (firstNumber / secondNumber);

}

// FUNCTION THAT CALLS THE BASIC MATH FUNCTION DEPENDING ON THE OPERATOR
function operate(operator, firstNumber, secondNumber) {
    if (operator === "+") {
       input.value = add(firstNumber, secondNumber);
    }

    if (operator === "-") {
        input.value = substract(firstNumber, secondNumber);
    }

    if (operator === "*") {
        input.value = multiply(firstNumber, secondNumber);
    }

    if (operator === "/") {
        input.value = divide(firstNumber, secondNumber);
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
            if (equality === "pressed"){
                input.value = "";
            }
            input.value += 1;
            break;
        case "two":
            if (equality === "pressed"){
            input.value = "";
            }
            input.value += 2;
            break;
        case "three":
            if (equality === "pressed"){
                input.value = "";
            }
            input.value += 3;
            break;
        case "four":
            if (equality === "pressed"){
                input.value = "";
            }
            input.value += 4;
            break;
        case "five":
            if (equality === "pressed"){
                input.value = "";
            }
            input.value += 5;
            break;
        case "six":
            if (equality === "pressed"){
                input.value = "";
            }
            input.value += 6;
            break;
        case "seven":
            if (equality === "pressed"){
                input.value = "";
            }
            input.value += 7;
            break;
        case "eight":
            if (equality === "pressed"){
                input.value = "";
            }
            input.value += 8;
            break;   
        case "nine":
            if (equality === "pressed"){
                input.value = "";
            }
            input.value += 9;
            break;
        case "zero":
            if (equality === "pressed"){
                input.value = "";
            }
            input.value += 0;
            break;
        case "plus":
            firstNumber = +input.value;
            input.value = "";
            operator = "+";
            break;
        case "substract":
            firstNumber = +input.value;
            input.value = "";
            operator = "-";
            break;
        case "multiply":
            firstNumber = +input.value;
            input.value = "";
            operator = "*";
            break;
        case "divide":
            firstNumber = +input.value;
            input.value = "";
            operator = "/";
            break;
        case "dot":
            input.value += ".";
            break;
        case "equals":
            secondNumber = +input.value;
            operate(operator, firstNumber, secondNumber);
            firstNumber = 0;
            secondNumber = 0;
            equality = "pressed"
            break;
        case "clear":
            input.value = "";
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