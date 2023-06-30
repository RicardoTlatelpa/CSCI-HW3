var calculatorInput = document.getElementById('calculatorInput');
calculatorInput.value = "0";
function appendToResult(value){
    if (calculatorInput && calculatorInput.value == "0"){
        calculatorInput.value = value;
    }
    else if (calculatorInput && calculatorInput.value != "0"){
        calculatorInput.value+=value;
    }

}



