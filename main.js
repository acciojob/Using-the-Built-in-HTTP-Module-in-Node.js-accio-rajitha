const http = require('http');

// TODO: Create an HTTP server

// TODO: Listen on port 3000

// DO NOT EDIT BELOW THIS LINE (Uncomment it once you are done with your code)

const fs = require('fs');
const path = require('path');


const filePath = process.argv[2];

if (!filePath) {
  console.error('Please provide a file path as a command-line argument.');
  process.exit(1);
}


const server = http.createServer((req, res) => {
  if (req.url === '/') {
   
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
      
        console.error(`Error reading file: ${err.message}`);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`Error reading file: ${err.message}`);
      } else {
       
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(data);
      }
    });
  } else {
   
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Not Found');
  }
});


const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});


fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err.message}`);
  } else {
    console.log(data);
  }
});