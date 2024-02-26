const server = http.createServer((req, res) => {
    fs.readFile('archivo.txt', (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("Error: Archivo no encontrado");
        return;
      }
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(data);
    });
  });
  
