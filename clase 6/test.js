
/// <reference path="c:/Users/NMachare/Documents/html/clase 6/Scripts/_references.js" />

module('Calculator Test Suite', {
    setup: function () {
        calculatorNamespace.initialize();
    }
});

test("Initialize Test", function () {
    expect(2);
    var expected = '0';
    equal($('#txtInput').val(), expected, 'Expected value: ' + expected +
    ' Actual value: ' + txtInput.value);
    equal($('#txtResult').val() , expected, 'Expected value: ' + expected +
    ' Actual value: ' + txtResult.value);
});



