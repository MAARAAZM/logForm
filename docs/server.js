const http = require('http');
const port = 8080;
const host = '127.0.0.1';

server = http.createServer( function(req, res) {

    if (req.method == 'POST') {
		setTimeout( function(){
			
			        console.log("POST");
        let body = '';
        req.on('data', function (data) {
			let login = JSON.parse(data).Username;
			let pass = JSON.parse(data).Password;
			
			
			if ( login === 'User' && pass === 'Password'){
				body += JSON.stringify({Auth: "Logged", Language: "EN"});
				console.log("Partial body: " + body);
				console.log("Data: " + data);
				res.end(body)
			} else{
				body += JSON.stringify({ Auth: "Denied" });
				console.log("Partial body: " + body);
				console.log("Data: " + data);
				res.end(body)
			}
			
            ;
        });
        req.on('end', function () {
            console.log("Body: " + body);
        });
        res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8',
		'Access-Control-Allow-Origin': '*'});
			
		}, 3000)
	
    }
});


server.listen(port, host);
console.log('Listening at http://' + host + ':' + port);