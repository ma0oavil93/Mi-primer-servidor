const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  try {
    const data = fs.readFileSync('archivo.txt');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(data);
  } catch (err) {
    res.writeHead(404);
    res.end("Error: Archivo no encontrado");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});
