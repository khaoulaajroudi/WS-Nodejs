let http= require('http')
let server=http.createServer((req, res) => {
    res.writeHead(200,{'content-type':'text/plain'})
    res.write("hello world!")
    res.end()
})
server.listen(4000)
console.log("server listen to port 4000")



