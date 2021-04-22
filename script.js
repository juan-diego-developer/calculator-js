
// varibles of operation 
let operationA;
let operationB;
let operation; 

function init(){
    // variable 
    let result = document.getElementById("result");
    let seven = document.getElementById("seven");
    let height = document.getElementById("height");
    let nane = document.getElementById("nane");
    let divide = document.getElementById("divide");
    let four = document.getElementById("four");
    let five = document.getElementById("five");
    let six = document.getElementById("six");
    let multyple = document.getElementById("multyple");
    let one = document.getElementById("one");
    let two = document.getElementById("two");
    let three = document.getElementById("three");
    let subtraction = document.getElementById("subtraction");
    let same = document.getElementById("same");
    let reset = document.getElementById("reset");
    let zero = document.getElementById("zero");
    let sum = document.getElementById("sum");

    // events
    one.onclick = (function ()  {
        result.textContent = result.textContent + 
        "1";
    });
    two.onclick = (e) => {
        result.textContent = result.textContent + 
        "2";
    }
    three.onclick = (e) => {
        result.textContent = result.textContent + 
        "3";
    }
    four.onclick = (e) => {
        result.textContent = result.textContent + 
        "4";
    }
    five.onclick = (e) => {
        result.textContent = result.textContent + 
        "5";
    }
    six.onclick = (e) => {
        result.textContent = result.textContent + 
        "6";
    }
    seven.onclick = (e) => {
        result.textContent = result.textContent + 
        "7";
    }
    height.onclick = (e) => {
        result.textContent = result.textContent + 
        "8";
    }
    nane.onclick = (e) => {
        result.textContent = result.textContent + 
        "9";
    }
    zero.onclick = (e) => {
        result.textContent = result.textContent + 
        "0";
    }
    // opearation
    reset.onclick = (e) => {
        reset();
    }
    sum.onclick = (e) => {
        operationA = result.textContent;
        operation = "+";
        cleanUp(); 
    }
    subtraction.onclick = (e) => {
        operationA = result.textContent;
        operation = "-";
        cleanUp(); 
    }
    multyple.onclick = (e) => {
        operationA = result.textContent;
        operation = "*";
        cleanUp(); 
    }
    divide.onclick = (e) => {
        operationA = result.textContent;
        operation = "/";
        cleanUp(); 
    }
    same.onclick = (e) => {
        operationB = result.textContent;
        operation = "=";
        sortOut(); 
    }

    // function cleanUp(){
    //     sortOut.textContent = "";
    // }
    // function reset(){
    //     sortOut.textContent = "";
    //     operationA = 0;
    //     operationB = 0;
    //     operation = "";
    // }
    // function sortOut(){
    //     let res = 0;
    //     switch(operation){
    //         case "+":
    //         res = parseFloat(operationA) + parseFloat(operationB);
    //         break;
    //         case "-":
    //         res = parseFloat(operationA) - parseFloat(operationB);
    //         break;
    //         case "*":
    //         res = parseFloat(operationA) * parseFloat(operationB);
    //         break;
    //         case "/":
    //         res = parseFloat(operationA) / parseFloat(operationB);
    //         break;

    //     }
    //     reset();
    //     sortOut.textContent = res;
    // }

}