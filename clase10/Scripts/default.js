/// <reference path="_references.js" />

var wsUrl = 'ws://echo.websocket.org/';

var webSocket;

$(document).ready(function(){
    if(checkSopported){
        connect();
        $("#btnSend").click(doSent);
    }
});

function checkSupported() {
    if (window.WebSocket) {
        writeOutput('WebSockets supported!');
        return true;
    }
    else {
        writeOutput('WebSockets NOT supported');
        $('#btnSend').attr('disabled', 'disabled');
        return false;
    }
}

function writeOutput(msg){
    var output = $("#divOutput");
    output.html(output.html() + "<br/>" + msg)
}

function connect(){
    webSocket = new webSocket(wsUrl);
    webSocket.onOpen = function (evt) { onOpen(evt) };
    webSocket.onclose = function (evt) { onClose(evt) };
    webSocket.onmessage = function (evt) { onMessage(evt) };
    webSocket.onerror = function (evt) { onError(evt) };
}

function onOpen(evt){
    writeOutput("conectado");
}

function doSent(){
    if(webSocket.readyState != websocked.open ) {
        writeOutput("NOT OPEN: " + $('#txtMessage').val());
        return;
    }
    writeOutput("SENT: " + $('#txtMessage').val());
    webSocket.send($('#txtMessage').val());
}

function onClose(evt) {
    writeOutput("DISCONNECTED");
}

function onMessage(evt) {
    writeOutput('RESPONSE: ' + evt.data);
}

function onError(evt) {
    writeOutput('ERROR: ' + evt.data);
}