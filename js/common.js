function getInputValueById(id){
   const inputValueString = document.getElementById(id).value;
   const inputValue = parseInt(inputValueString);
   return inputValue;
}

function getElementTextById(id){
    const elmentTextString = document.getElementById(id).innerText;
    const elementText = parseInt(elmentTextString);
    return elementText;
}
function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}

function getInputData(){
    const foodInputValue = getInputValueById('food-input');
    const rentInputValue = getInputValueById('rent-input');
    const clothInputValue = getInputValueById('cloth-input');
    const incomeInput = getInputValueById('income-input');
    const saveInput = getInputValueById('save-input');

    const inputdata = {
        foodInputValue : foodInputValue,
        rentInputValue : rentInputValue,
        clothInputValue : clothInputValue,
        incomeInput : incomeInput,
        saveInput : saveInput,
    }
    return inputdata;
}

function getElementData(){
    const balance = getElementTextById('balance');
    const saveAmount = getElementTextById('save-amount');

    const elmentText = {
        balanceText : balance,
        saveAmountText : saveAmount,
    }
    return elmentText;
}
