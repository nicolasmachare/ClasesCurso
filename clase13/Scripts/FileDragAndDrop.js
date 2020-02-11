/// <reference path="jquery-1.8.3.js" />

$(document).ready(function () {
    jQuery.event.props.push('dataTransfer');
    $('#target').on('dragenter', preventDefault);
    $('#target').on('dragover', preventDefault);
    $('#target').on('drop', dropItem);
});

function preventDefault(e) {
    e.preventDefault();
}

function dropItem(e) {
    var files = e.dataTransfer.files
    , $table = $('#fileInfo')
    , i = 0;

    if($table.class == "vacia"){
        $table.html('<thead><tr><th>Name</th><th>Type</th><th>Size</th></tr></thead>');
        $table.class = "iniciada";
    }

    for (i = 0; i < files.length; i++) {
        $('<tr><td>'
        + files[i].name + '</td><td>'
        + files[i].type + '</td><td>'
        + files[i].size + '</td></tr>').appendTo($table);
    }
    preventDefault(e);
}