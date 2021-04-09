const http = require('http');

const server = http.createServer((req, res)=>{
    //  console.log(req)
    if(req.url === '/'){
        res.end('<H1>Welcome to our Home page</H1>')
    }

    if(req.url === '/about'){
        res.end('Here is our Short history');
    }

    res.end(`
    <h1> something went wrong </h1>
    <a href ="/"> Click here to go back </a>
    `)
})

server.listen(5000);