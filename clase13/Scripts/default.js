/// <reference path="jquery-1.8.3.js" />

var squareCount = 16;
var emptySquare;

$(document).ready(function () {
    jQuery.event.props.push('dataTransfer');
    createBoard();
    addTiles();
    $('#gameBoard').on('dragstart', dragStarted);
    $('#gameBoard').on('dragend', dragEnded);
    $('#gameBoard').on('dragenter', preventDefault);
    $('#gameBoard').on('dragover', preventDefault);
    $('#gameBoard').on('drop', drop);
    scramble();
});

function scramble(){
    for (var i = 0; i < 128; i++) {
        var random = Math.random()
        var sourceLocation;
        if (random < 0.5) {
            var column = emptySquare % 4
            if (column == 0 || (random < 0.25 && column != 3)) {
                sourceLocation = emptySquare + 1;
            }
            else {
                sourceLocation = emptySquare - 1;
            }
        }
        else {
            var row = Math.floor(emptySquare / 4)
            if (row == 0 || (random < 0.75 && row != 3)) {
                sourceLocation = emptySquare + 4;
            }
            else {
                sourceLocation = emptySquare - 4;
            }
        }
        swapTileAndEmptySquare(sourceLocation);
    }
}

function dragStarted(e){
    var $tile = $(e.target);
    var sourceLocation = $tile.parent().data('square');
    $tile.addClass('dragged');
    e.dataTransfer.setData('text', sourceLocation.toString());
    e.dataTransfer.effectAllowed = 'move';
}

function drop(e){
    var $square = $(e.target);
    if($square.hasClass('square')){
        var destinationSquare = $square.data('square');
        if(destinationSquare != emptySquare){
            return;
        }else{
            var sourceLocation = Number(e.dataTransfer.getData('text'));
            moveTile(sourceLocation);
        }
    }
}

function moveTile(e){
    var distance;
    distance = e - emptySquare;
    if(distance < 0){
        distance = distance * -1;
    }
    if(distance == 1 || distance == 4){
        swapTileAndEmptySquare(e)
    }
}

function swapTileAndEmptySquare(e){
    var $cubo = $('#square' + e).children();
    $cubo.detach();
    var $objetivo = $('#square' + emptySquare);
    $cubo.appendTo($objetivo);
    emptySquare = e;
    controlar();
}

function controlar(){
    var control = true;
    if(emptySquare == squareCount -1){
        for(i=0;i<15;i++){
            if($('#square' + i).children().text != (i+1)){
                return;
            }else{
                $('#message').html('Winner!');
                alert("Ganaste!");
            }
        }
    }
}

function dragEnded(e) {
    $(e.target).removeClass('dragged');
}

function preventDefault(e) {
    e.preventDefault();
}

function createBoard(){
    for (var i = 0; i < squareCount; i++) {
        var $square = $('<div id="square' + i + '" data-square="'
        + i +'" class="square"></div>');
        $square.appendTo($('#gameBoard'));
    }
}

function addTiles() {
    emptySquare = squareCount - 1;
    for (var i = 0; i < emptySquare; i++) {
    var $square = $('#square' + i);
    var $tile = $('<div draggable="true" id="tile' + i
    + '" class="tile">' + (i + 1) + '</div>');
    $tile.appendTo($square);
    }
}