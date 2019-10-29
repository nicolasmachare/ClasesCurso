var txtInput;
var txtResult;

function initialize() {

    for (var i = 0; i < 10; i++) {
        document.getElementById('button'+i).addEventListener('click',numberClick, false);
    }

    txtInput = document.getElementById('txtInput');
    txtResult = document.getElementById('txtResult');

    document.getElementById('buttonPlus').addEventListener('click', plusClick, false);
    document.getElementById('buttonMinus').addEventListener('click', minusClick, false);
    document.getElementById('buttonClear').addEventListener('click', clear, false);
    document.getElementById('buttonClearEntry').addEventListener('click', clearEntry, false);
    document.getElementById('buttonMult').addEventListener('click', multClick, false);
    document.getElementById('buttonDiv').addEventListener('click', divClick, false);
    clear();
}

function numberClick() {
    txtInput.value = txtInput.value =='0' ?
    this.innerText : txtInput.value + this.innerText;
}

function plusClick() {
    txtResult.value = Number(txtResult.value) + Number(txtInput.value);
    clearEntry();
}

function minusClick() {
    txtResult.value = Number(txtResult.value) - Number(txtInput.value);
    clearEntry();
}

function multClick() {
    txtResult.value = Number(txtResult.value) * Number(txtInput.value);
    clearEntry();
}

function divClick() {
    if(txtInput.value == '0'){
        alert("No se puede dividir por 0" );
    }else{
        txtResult.value = Number(txtResult.value) / Number(txtInput.value);
        clearEntry();s
    }
}

function clear() {
    txtResult.value = '0';
    txtInput.value = '0';
}

function clearEntry() {
    txtInput.value = '0';
}