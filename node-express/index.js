const http = require('http');
const express = require('express');
const app = express();
const port = 3001;
const hostname = 'localhost';
const morgan = require('morgan')


app.use(express.static(__dirname + "/public-express"));

app.use(morgan('dev'));
app.use((req, res) => {
   console.log("Request for " + req.url + " with method " + req.method);
   
   res.statusCode = 200;
   res.setHeader("Content-Type", "text/html");
   res.end("This is an express server page")
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}`);
})


