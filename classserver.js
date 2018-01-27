
var http = require("http")

var goodPORT = 7000
var badPORT = 7500

function goodRequest(request, response) { response.end("you're cool" + request.url)}
function badRequest(request, response) { response.end("you suck" + request.url)}



var goodServer = http.createServer(goodRequest)

var badServer = http.createServer(badRequest)

goodServer.listen(goodPORT, function() {

console.log("Server listening on: http://localhost:" + goodPORT)

})

badServer.listen(badPORT, function() {

console.log("Server listening on: http://localhost:" + badPORT)

})

