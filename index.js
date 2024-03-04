const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)
    res.setHeader('content-type', 'text/plain')
    res.write('hi')
    res.end()
})

server.listen(8080, 'localhost', () => {
    console.log('listening for requests...')
})