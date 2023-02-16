document.getElementById('btn-calculate').addEventListener('click', function(){
    // const foodInputValue = getInputValueById('food-input');
    // const rentInputValue = getInputValueById('rent-input');
    // const clothInputValue = getInputValueById('cloth-input');
    // const totalExpense = foodInputValue + rentInputValue + clothInputValue;

    const inputData = getInputData();
    /* 
     ##### Check input field
    */

    if(isNaN(inputData.incomeInput) || inputData.incomeInput <= 0 ){
       return alert('Income : Please enter integer number')
    }
    else if(isNaN(inputData.foodInputValue) || inputData.foodInputValue <= 0){
      return  alert('Food : Please enter integer number')
    }
    else if(isNaN(inputData.rentInputValue) || inputData.rentInputValue <= 0){
       return alert('Rent : Please enter integer  number')
    }
    else if(isNaN(inputData.clothInputValue) || inputData.clothInputValue <= 0){
       return alert('Clothes : Please enter integer  number')
    }
    const totalExpense = inputData.foodInputValue + inputData.rentInputValue + inputData.clothInputValue;
    
    /* 
     ##### compare income & expense
    */

    if(inputData.incomeInput < totalExpense){
        return alert('cut your coat according to your cloth ')
    }
    setInnerText('total-expense', totalExpense);
    // const incomeInput = getInputValueById('income-input');
    // const income = inputData.incomeInput;
    const balance = inputData.incomeInput - totalExpense;
    setInnerText('balance', balance);
})

document.getElementById('btn-save').addEventListener('click', function(){
    // const incomeInput = getInputValueById('income-input');
    // const saveInput = getInputValueById('save-input');

    const inputData = getInputData();

    /* 
     ##### Check input field
     */
    if(isNaN(inputData.saveInput) || inputData.saveInput <= 0){
        return alert('Save : Please enter integer number')
    }
    const saveMoney = inputData.incomeInput * ( inputData.saveInput / 100);
    setInnerText('save-amount', saveMoney);

    // const balance = getElementTextById('balance');
    // const saveAmount = getElementTextById('save-amount');

    const elementText = getElementData()
    /* 
      ##### compare balance & saving
    */
    if(elementText.balanceText <= elementText.saveAmountText){
        return alert('You do not have enough money for saving')
    }
 
    console.log(elementText.balanceText, elementText.saveAmountText)
    const remainingAmount = elementText.balanceText - elementText.saveAmountText;
    setInnerText('remaining-amount', remainingAmount);
})