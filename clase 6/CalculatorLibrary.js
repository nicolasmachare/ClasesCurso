/// <reference path="c:/Users/NMachare/Documents/html/clase 6/Scripts/_references.js" />

function Calculadora() {
    this.calculatorNamespace = this.calculatorNamespace || {};
    var ns = this.calculatorNamespace;

    ns.initialize() = function () {

        var calculator = new ns.Calculator();
        $('button[id^="buttonNumber"]').on('click', calculator.numberClick);
        $('#buttonPlus').on('click', calculator.plusClick);
        $('#buttonMinus').on('click', calculator.minusClick);
        $('#buttonClear').on('click', calculator.clear);
        $('#buttonClearEntry').on('click', calculator.clearEntry);
        calculator.clear();
    }

    ns.Calculator = (function () {

        function Calculator (){
        }

        Calculator.prototype.numberClick() = function (){
            $('#txtInput').val($('#txtInput').val() == '0'?
            $(this).text() : $('#txtInput').val() + $(this).text());
        };

        Calculator.prototype.plusClick() = function (){
            $('#txtInput').val(Number($('#txtResult').val()) + Number($('#txtInput').val()))
            calculator.prototype.clearEntry();
        };

        Calculator.prototype.minusClick() = function (){
            $('#txtInput').val(Number($('#txtResult').val()) - Number($('#txtInput').val()))
            calculator.prototype.clearEntry();
        };

        Calculator.prototype.clearEntry() = function (){
            $('#txtInput').val('0');
        };

        Calculator.prototype.clear() = function (){
            $('#txtInput').val('0');
            $('#txtResult').val('0');
        };

        return calculator;
    }());

};