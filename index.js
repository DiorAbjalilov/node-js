const http = require("http");

const server = http.createServer((req, res) => {
  // req = server so'rov
  // res = server javob
  res.write("<h1>Hello world Node js</h1>");
  res.write("<h1>Hello world js</h1>");
  res.write("<h1>Hello world React js</h1>");
  res.end();
});

server.listen(5000, () => {
  console.log("Server has been started on port 5000...");
});
