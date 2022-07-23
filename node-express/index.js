const http = require('http');
const express = require('express');
const app = express();
const port = 3001;
const hostname = 'localhost';
const fs = require('fs');
const path = require('path');

app.use((req, res) => {
   console.log("Request for " + req.url + " with method " + req.method);
   
   if (req.method === 'GET') {
      var fileUrl;

      if (req.url === '/') {
         fileUrl = '/index.html';
      } else {
         fileUrl = req.url;
      }

      var filePath = path.resolve('./public-express' + fileUrl);
      const fileExtension = path.extname(filePath);
      if (fileExtension === '.html') {
         fs.exists(filePath, (exist) => {
            if (!exist) {
               res.statusCode = 404;
               res.setHeader("Content-Type", "text/html");
               res.end("Error 404: " + filePath + " not found");

               return;
            } else {
               res.statusCode = 200;
               res.setHeader("Content-Type", "text/html");
               fs.createReadStream(filePath).pipe(res);
            }
         });
      } else {
         res.statusCode = 404;
         res.setHeader("Content-Type", "text/html");
         res.end("Error 404: sorry!!! " + filePath + " is not an HTML file.")

         return;
      }

   } else {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html")
      res.end("This request: " + req.method + " method is not supported");

      return;
   }
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}`);
})
