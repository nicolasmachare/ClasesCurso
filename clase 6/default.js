var txtInput;
var txtResult;

function initialize() {
    txtInput = document.getElementById('txtInput');
    txtResult = document.getElementById('txtResult');
    clear();
}

function clear() {
    txtInput.value = '0';
    txtResult.value = '0';
}