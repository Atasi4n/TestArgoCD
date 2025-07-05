const http = require('http');
const port = process.env.PORT || 7000;
const server = http.createServer((req, res) => {
  res.end(`Hola mundo desde Docker!`);
});
server.listen(port, () => console.log(`App en http://localhost:${port}`));