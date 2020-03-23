/// <reference path="jquery-3.4.1.js" />

$(document).ready(function () {
    //drawSomething();
    //drawUsingCssColor();
    //drawGradient();
    //drawPattern();
    //drawLineWidth();
    //saveRestore();
    //drawLine();
    //drawArcTo();
    //drawArc();
    drawText();

});

function drawText() {
    var canvas = document.getElementById('myCanvas')
    , ctx = canvas.getContext('2d');
    ctx.strokeStyle = 'magenta';
    ctx.fillStyle = 'yellow';
    ctx.lineWidth = 2;
    ctx.font = "bold 100pt TimesNewRoman";
    ctx.beginPath();
    ctx.moveTo(100, 300);
    ctx.lineTo(700, 300);
    ctx.stroke();
    ctx.strokeStyle = 'blue';
    ctx.fillText("Hello", 400, 300);
    ctx.strokeText("Hello", 400, 300);
}

function drawArc() {
    var canvas = document.getElementById('myCanvas')
    , ctx = canvas.getContext('2d');
    ctx.strokeStyle = 'blue';
    ctx.fillStyle = 'yellow';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(400, 300, 100, 0, 1.5 * Math.PI , true);
    ctx.fill();
    ctx.stroke();
}

function drawArcTo() {
    var canvas = document.getElementById('myCanvas')
    , ctx = canvas.getContext('2d');
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(300, 200);
    ctx.lineTo(400, 500);
    ctx.lineTo(600, 300);
    ctx.stroke();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(300, 200);
    ctx.arcTo(400, 500, 600, 300, 200);
    ctx.stroke();
}

function drawLine(){
    var canvas = document.getElementById('myCanvas')
    , ctx = canvas.getContext('2d');
    ctx.fillStyle = 'green';
    ctx.strokeStyle = 'yellow';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(100, 250);
    ctx.lineTo(150, 350);
    ctx.lineTo( 50, 350);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(150, 250);
    ctx.lineTo(250, 250);
    ctx.lineTo(200, 350);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(300, 250);
    ctx.lineTo(350, 350);
    ctx.lineTo(250, 350);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(500, 250);
    ctx.lineTo(500, 350);
    ctx.moveTo(450, 300);
    ctx.lineTo(550, 300)
    ctx.fill();
    ctx.stroke();
}

function saveRestore() {
    var canvas = document.getElementById('myCanvas')
    , ctx = canvas.getContext('2d');
    ctx.lineWidth = 20;
    ctx.strokeStyle = "green";
    ctx.lineJoin = 'round';
    ctx.strokeRect(20, 20, 50, 50);
    ctx.save();

    ctx.lineWidth = 10;
    ctx.strokeStyle = "red";
    ctx.lineJoin = 'bevel';
    ctx.strokeRect(100, 100, 50, 50);

    ctx.restore();
    ctx.strokeRect(180, 180, 50, 50);
}

function drawLineWidth() {
    var canvas = document.getElementById('myCanvas')
    , ctx = canvas.getContext('2d')
    , offset = 40
    , width = 5
    , height = 5
    , lineWidth = 1
    , i = 0
    , centerX = canvas.width / 2
    , centerY = canvas.height / 2;
    for (i = 1; i < 15; i++) {
    ctx.lineWidth = i;
    ctx.strokeRect(centerX - (width / 2) - (i * offset / 2),
    centerY - (height / 2) - (i * offset / 2),
    width + (i * offset), height + (i * offset));
    }
}

function drawPattern() {
    var canvas = document.getElementById('myCanvas')
    , ctx = canvas.getContext('2d');
    // create new image object to use as pattern
    var img = new Image();
    img.src = 'copa.jpg';
    img.onload = function () {
        // create pattern
        var ptrn = ctx.createPattern(img, 'repeat');
        ctx.fillStyle = ptrn;
        ctx.fillRect(0, 0, 400, 400);
    }
}

function drawGradient() {
    var canvas = document.getElementById('myCanvas')
    , ctx = canvas.getContext('2d')
    , x0 = 0
    , y0 = 0
    , r0 = 0
    , x1 = 200
    , y1 = 0
    , r1 = 100
    , width = 300
    , height = 50
    , offset = 10;

    gradient = ctx.createLinearGradient(x0, y0, x1, y1);
    addColorStops(gradient);
    ctx.fillStyle = gradient;
    ctx.fillRect(10, 0 * (height + offset), width, height);
    ctx.fillRect(100, 1 * (height + offset), width, height);

    y1 = 300;
    gradient = ctx.createLinearGradient(x0, y0, x1, y1);
    addColorStops(gradient);
    ctx.fillStyle = gradient;
    ctx.fillRect(10, 2 * (height + offset), width, height);
    ctx.fillRect(100, 3 * (height + offset), width, height);

    x0 = x1 = width / 2;
    y0 = y1 = 4 * (height + offset) + (height / 2);
    gradient = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
    addColorStops(gradient);
    ctx.fillStyle = gradient;
    ctx.fillRect(10, 4 * (height + offset), width, height);
    ctx.fillRect(100, 5 * (height + offset), width, height);

    y0 = 5 * (height + offset) + (height / 2);
    y1 = y0 + 100;
    gradient = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
    addColorStops(gradient);
    ctx.fillStyle = gradient;
    ctx.fillRect(10, 6 * (height + offset), width, height);
    ctx.fillRect(100, 7 * (height + offset), width, height);

}

function addColorStops(gradient) {
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop(".25", "blue");
    gradient.addColorStop(".50", "orange");
    gradient.addColorStop(".75", "yellow");
    gradient.addColorStop("1.0", "red");
}


function drawSomething() {
    var canvas = document.getElementById('myCanvas')
            , ctx = canvas.getContext('2d')
            , offset = 15
            , clearOffset = 30
            , pushDownOffset = 10
            , height = 50
            , width = 100
            , count = 4
            , i = 0;

    for (i = 0; i < count; i++) {
        ctx.fillRect(i * (offset + width) + offset, offset, width, height);
        ctx.clearRect(i * (offset + width) + (clearOffset / 2) + offset,
        offset + (clearOffset / 2) + pushDownOffset,
        width - clearOffset, height - clearOffset)
        ctx.strokeRect(i * (offset + width) + offset,(2 * offset) + height, width, height);
    }    
}

function drawUsingCssColor() {
    var canvas = document.getElementById('myCanvas')
    , ctx = canvas.getContext('2d')
    , offset = 10
    , size = 50;
    ctx.fillStyle = "red";
    ctx.fillRect(offset + (0 * (offset + size)), offset, size, size);
    ctx.fillRect(offset + (1 * (offset + size)), offset, size, size);
    ctx.fillStyle = "#00FF00";
    ctx.fillRect(offset + (2 * (offset + size)), offset, size, size);
    ctx.fillRect(offset + (3 * (offset + size)), offset, size, size);
    ctx.fillStyle = "rgba(0, 0, 255, 0.25)";
    ctx.fillRect(offset + (4 * (offset + size)), offset, size, size);
    ctx.fillRect(offset + (5 * (offset + size)), offset, size, size);
}