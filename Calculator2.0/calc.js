const calculate = (sign) => {
    const firstValue = parseFloat(document.getElementById("firstInput").value);
    const secondValue = parseFloat(document.getElementById("secondInput").value);

    let errorMsg = ''; // false
    let result = 0;

    if (isNaN(firstValue) || isNaN(secondValue)) {
        errorMsg = 'Input error';
    } else {
        switch (sign) {
            case '*':
                result = firstValue * secondValue;
                break;

            case '+':
                result = firstValue + secondValue;
                break;

            case '/':
                if (secondValue === 0) {
                    errorMsg = 'Dividing by zero'; //true
                }
                result = firstValue / secondValue;
                break;
            case '-':
                result = firstValue - secondValue;
                break;
        }
    }
    document.getElementById("result").innerHTML = errorMsg ? errorMsg : result;

}