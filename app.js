function handleNumberChange(isIncrease) {
    const inputNumber = document.getElementById('firstClassInput');
    const newNumber = parseInt(inputNumber.value);
    let totalNumber = newNumber;
    if (isIncrease == true) {
        totalNumber = newNumber + 1;
    }
    if (isIncrease == false) {
        totalNumber = newNumber - 1;
    }
    document.getElementById('firstClassInput').value = totalNumber;
}