var http = require('http')
var https = require('https')

function HTTPServer(ipOrHostname, port, responseCallback, sslKey, sslCrt) {
    this.ipOrHostname = ipOrHostname
    this.port = port
    this.sslConfig = {
        key: sslKey,
        cert: sslCrt
    }

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

module.exports = HTTPServer