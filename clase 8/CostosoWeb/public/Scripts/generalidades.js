/// <reference path="_references.js" />

$(document).ready(function () {
    $('#submit').on('click', callServer);
});

function mostrarCambioRange() {
    var edad = $('#edad').val();
    $('#edadAux').html(edad);
}

function callServer() {
    var data = $('#ContactForm').serialize();
    $.post('/ContactService', data, function (returnObject) {
        $('#result').html(returnObject.result);
    }, 'json');
}
