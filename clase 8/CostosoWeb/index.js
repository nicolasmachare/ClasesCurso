var express = require('express');
var app = express();
var formidable = require('formidable');

app.use(express.static(__dirname + '/public'));

app.get('/', function (request, response) {
    response.redirect('default.html');
});

app.post('/ContactMessage', function (request, response) {
    var form = new formidable.IncomingForm();
    form.parse(request, function (err, fields) {
        var lastName = fields.lastName,
        firstName = fields.firstName,
        email = fields.email,
        edad = fields.edad,
        message = fields.message;
        console.log(toString(request));


        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write('Thank you, ' + firstName + ' ' + lastName + '<br/>'); ' edad ' + edad +
        response.write('Age ' + edad + '<br/>');
        response.write('We will contact you at ' + email + '<br/>');
        response.end('Your message: ' + message + '<br />');
        console.log('Handled request for ' + firstName + ' ' + lastName);
    });
});

app.post('/ContactService', function (request, response) {
    var form = new formidable.IncomingForm();
    form.parse(request, function (err, fields) {
        var lastName = fields.lastName,
        firstName = fields.firstName,
        edad = fields.edad,
        email = fields.email,
        message = fields.message,
        result = 'Thank you, ' + firstName + ' ' + lastName + '<br/>'
                                + 'Age ' + edad + '<br/>'
                                + 'We will contact you at ' + email + '<br/>'
                                + 'You message: ' + message + '<br />';

        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end('{ "result": "' + result + '"}');
        console.log('Handled service request for ' + firstName + ' ' + lastName);
    });
});

//las siguientes 3 lineas siempre tienen que ser las ultimas

var port = 8080;
app.listen(port);
console.log('Listening on port: ' + port);