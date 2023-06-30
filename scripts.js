let dotFlag = false;
var calculatorInput = document.getElementById('calculatorInput');
function setInput(){
    calculatorInput.value = "0";
}

setInput();

function appendToResult(value){
    if (calculatorInput && calculatorInput.value == "0"){
        calculatorInput.value = value;
    }
    else if (calculatorInput && calculatorInput.value != "0"){
        calculatorInput.value+=value;
    }
}

function clearResult(){
    if (calculatorInput.value != "0"){
        setInput();
    }    
}

function handleOperator(operator){
    console.log("Operator pressed!");
    console.log(operator);
}