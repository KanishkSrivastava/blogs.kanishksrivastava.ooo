const express = require("express");
const { parse } = require("url");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
  const server = express();
  // THIS IS THE DEFAULT ROUTE, DON'T EDIT THIS
  server.get("*", (req, res) => {
    return handle(req, res);
  });
  const port = 8080;
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on port ${port}...`);
  });
});
