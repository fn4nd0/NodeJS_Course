const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {

    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name
    
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')

    if (!name) {
        res.end(
            '<h1>Fill your name:</h1>'+
            '<form method="GET">'+
                '<input type="text" name="name"</input>' +
                '<button type=submit>Send</button>' +
            '</form>'
        )
    } else {
        res.end(`<h1>Welcome ${name}`)
    }
    

})

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})