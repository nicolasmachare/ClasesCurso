module('QUnit Test Suite', { setup: function () { initialize(); } });

test("Initialize Test", function () {
    expect(2);
    var expected = '0';
    equal(txtInput.value, expected, 'Expected value: ' + expected +
    ' Actual value: ' + txtInput.value);
    equal(txtResult.value, expected, 'Expected value: ' + expected +
    ' Actual value: ' + txtResult.value);
});