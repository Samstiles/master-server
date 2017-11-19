var http = require('http')
var https = require('https')

function HTTPServer(ipOrHostname, port, responseCallback, sslConfig) {
    this.ipOrHostname = ipOrHostname
    this.port = port
    this.sslConfig = sslConfig

    this.server = http.createServer(sslConfig, (req, res) => {
        res.statusCode = 200
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Content-Type', 'application/json')
        res.end(responseCallback())
    })
}

HTTPServer.prototype.start = function() {
    this.server.listen(this.port, '0.0.0.0', () => {
        console.log(`HTTPServer running at http://${this.ipOrHostname}:${this.port}/`)
    })
}