/// <reference path="jquery-1.8.3.js" />

$(document).ready(function () {
    //jquery.event.props.push(DataTransferItemList);
    jQuery.event.props.push('dataTransfer');
    $('#carList').on('dragstart', dragging);
    $('#favoriteCars').on('dragenter', preventDefault);
    $('#favoriteCars').on('dragover', preventDefault);
    $('#favoriteCars').on('drop', dropItem);
});


function dragging(e) {
    var val = e.target.getAttribute('data-value');
    e.dataTransfer.setData('text', val);
    e.dataTransfer.effectAllowed = 'copy';
}

function preventDefault(e) {
    e.preventDefault();
}

function dropItem(e) {
    var data = e.dataTransfer.getData('text').split(',');
    if (data[0] == 'car') {
        var li = document.createElement('li');
        li.textContent = data[1];
        e.target.appendChild(li);
    }
}