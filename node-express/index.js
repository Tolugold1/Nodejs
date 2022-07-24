const http = require('http');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const dishRouter = require("./dishRouter");
const promotionRouter = require("./promotionRouter");
const leaderRouter = require("./leaderRouter");

const app = express();

const port = 3001;
const hostname = 'localhost';


app.use('/', dishRouter);
app.use('/dishes', dishRouter);
app.use('/', promotionRouter);
app.use("/promotion", promotionRouter);
app.use('/', leaderRouter);
app.use("/leader", leaderRouter);

app.use(bodyParser.json());

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


