const http = require('http');
const port = 3000;
const hostname = "localhost";
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
   console.log("Request for " + req.url + " by method " + req.method)

   if (req.method === 'GET') {
      var fileUrl;
      if (req.url === '/') {
         fileUrl = '/index.html';
      } else {
         fileUrl = req.url;
      }

      var filePath = path.resolve('./public' + fileUrl);
      const fileExtension = path.extname(filePath);
      if (fileExtension === '.html') {
         fs.exists(filePath, (exist) => {
            if (!exist) {
               res.statusCode = 404;
               res.setHeader('Content-Type', 'text/html');
               res.end("Error 404: " + fileUrl + " not found");

               return;
            } else {
               res.statusCode = 200;
               res.setHeader('Content-Type', 'text/html');
               fs.createReadStream(filePath).pipe(res);
            }
         });
      } else {
         res.statusCode = 404;
         res.setHeader('Content-Type', 'text/html');
         res.end("Error 404: " + fileUrl + " not an HTML file");

         return;
      }
   } else {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      res.end("Error 404: " + req.method + " not supported");

      return;
   }
});

server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`)
})