const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)

    let htmlPath = './views/'
    switch (req.url) {
        case '/':
            htmlPath += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            htmlPath += 'about.html';
            res.statusCode = 200;
            break;
        case '/contact-me':
            htmlPath += 'contact-me.html';
            res.statusCode = 200;
            break;
        default:
            htmlPath += '404.html'
            res.statusCode = 404;
            break;
    }

    res.setHeader('content-type', 'text/html')

    fs.readFile(htmlPath, (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        } else {
            res.end(data)
        }
    })    
})

server.listen(8080, 'localhost', () => {
    console.log('listening for requests...')
})