function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function calculate() {
    const display = document.getElementById('display');
    const expression = display.value;
    
    // This will replace the result of any mathematical operation with "I love You"
    if (expression.match(/[0-9]+[+\-*/][0-9]+/)) {
        display.value ="(geser kolom ini) i love you, coba tambahin angka 9 terus ok"
    } else {
        try {
            display.value = eval(expression);
        } catch {
            display.value ="maafin aku yaa sayangg udah buat kamu badmood mau ga maafin aku? kalo mau unblockk yaaa"
        }
    }
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}
