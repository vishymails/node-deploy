var http = require('http');
var path = require('path');


var pages = [
    {route : '/', output : 'Welcome Page'},
    {route : '/about/this', output : 'A simple routing page '},
    {route : '/about/node', output : 'A node based output '},
    {route : '/anotherpage', output : function () { return 'Here  \s ' + this.route;}}
];

http.createServer(function(request, response ) {
    var lookup = decodeURI(request.url);

    pages.forEach(function (page) {
        if(page.route === lookup) {
            response.writeHead(200, {'Content-Type' : 'text/html'});
            response.end(typeof page.output === 'function' ? page.output() : page.output);
        }
    });
}).listen(8080);
