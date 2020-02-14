/// <reference path="jquery-1.8.3.js" />

var worker = new Worker('Scripts/myWork.js');
worker.onmessage = function (e) {
    $('#result').append(e.data + '<br />');
}
worker.onerror = function (e) {
    $('#result').append('Error: ' + e.data + '<br />');
}

$('document').ready(function () {
    $('#btnSend').on('click', function () {
        worker.postMessage($('#message').val());
    });
    $('#btnCerrar').on('click', function () {
        worker.terminate();
    });
});