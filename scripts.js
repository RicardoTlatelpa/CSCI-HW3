var dotFlag = false;
var inputs = [];
var last_operator = '';
var lock = true;

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

function appendInput(number){    
    if(queueLength() != 2){             
        inputs.push(number);
    }
}

resetInput();

function appendToResult(value){
    lock = false;
    if (calculatorInput && calculatorInput.value == "0"){
        calculatorInput.value = value;
    }
    else if (calculatorInput && calculatorInput.value != "0"){
        calculatorInput.value+=value;
    }
}

function clearResult(){
    
    resetInput();        
    resetDot();
    inputs = [];
    lock = true
}

function performOperation(n1,n2,operator){
    console.log(n1,n2,operator)
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
    if(operator == '+' || operator == '-' || operator == '/' || operator == '%' || operator == '*'){
        if(!lock){
            lock = true;
        }
        last_operator = operator;
    }
    let newInput = false;
    if(LENGTH > 0 && operator == "="){
      let n1 = inputs.shift();
      let n2 = inputs.shift();
      newInput = performOperation(n1,n2, last_operator);      
    }    
    console.log(newInput)
    if(newInput != false && !isNaN(newInput)){
      setInput(newInput);
    }
}

function handleOperator(operator){
    if (operator == '.'){
        if(!dotFlag){
            dotFlag = true;
            if (getInput().value == "0"){
                appendToResult("0.");
            }
            else {
              appendToResult(".");
            }
        }
    }
    else{
      if(!lock){
        appendInput(parseInt(getInput().value));        
      }
      
      console.log(inputs)
      if(getInput().value != "0"){
        resetInput();
        resetDot();
      }      
      handleOperation(operator);
    }
}
