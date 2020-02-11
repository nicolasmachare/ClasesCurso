/// <reference path="jquery-3.4.1.js" />

var $draggedItem;

$(document).ready(function () {
    $('.item').on('dragstart', dragging);
    $('.item').on('dragend', draggingEnded);
    $('.hole').on('dragenter', preventDefault);
    $('.hole').on('dragenter', dragEnter);
    $('.hole').on('dragleave', dragLeave);
    $('.hole').on('dragover', preventDefault);
    $('.hole').on('drop', dropItem);
});

function preventDefault(e) {
    e.preventDefault();
}

function dragging(e) {
    $(e.target).addClass('dragging');
    $draggedItem = $(e.target);
}

function dragEnter(e) {
    var hole = $(e.target);
    if(hole.hasClass('hole') && hole.children().length == 0){
        $(e.target).addClass('dragenter');
    }
}

function dragLeave(e) {
    $(e.target).removeClass('dragenter');
}

function draggingEnded(e) {
    $(e.target).removeClass('dragging');
}

function dropItem(e) {
    var hole = $(e.target);
    if (hole.hasClass('hole') && hole.children().length == 0) {
        $draggedItem.detach();
        $draggedItem.appendTo($(e.target));
        $(e.target).removeClass('dragenter');
    }
}