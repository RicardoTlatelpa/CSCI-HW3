var dotFlag = false;
var inputs = [];

function queueLength(){
    return inputs.length;
}

function getInput(){
    return document.getElementById('calculatorInput');
}
var calculatorInput = getInput();
function resetInput(){
    calculatorInput.value = "0";
}

function setInput(ip){
    calculatorInput.value = ip;
}

function resetDot(){
    if(dotFlag){
        dotFlag = false;
    }    
}


resetInput();

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
        resetInput();        
        resetDot();
        inputs = [];
    }    
}

function performOperation(n1,n2,operator){
    if(operator == "+"){
        return n1 + n2;
    }
    else if (operator == "-"){
        return n1 - n2;
    }
    else if(operator == "*"){
        return n1 * n2;
    }
    else if(operator == "/"){
        return n1 / n2;
    }
    else if(operator == "%"){
        return n1 % n2;
    }
}

function handleOperation(operator){ // two states can come here
    const LENGTH = queueLength();
    let newInput = 0;
    if(LENGTH == 2){
        newInput = performOperation(inputs.shift(),inputs.shift(), operator);
    }
    else if(LENGTH == 1){
        newInput = performOperation(inputs.shift(), 0, operator);
    }
    setInput(newInput)
}

function handleOperator(operator){
    if (operator == '.'){
        if(!dotFlag){
            dotFlag = true;
            if (getInput().value == "0"){
                appendToResult("0.")
            }
        }
    }
    else if(operator == '+'){
        inputs.push(Number(getInput.value));
        resetInput();
        resetDot();
        handleOperation(operator);
    }
}