// const http = require("http");
// const fs = require("fs");
// const url = require("url"

// // function myHandler(req, res) {
// //   const log = `${Date.now()} ${req.method} ${req.url}\n`;

// //   fs.appendFile("log.txt", log, (err) => {
// //     if (err) {
// //       console.error("Error writing log:", err);
// //     }

// //     switch (req.url) {
// //       case "/":
// //         res.end("Home Page");
// //         break;

// //       case "/about":
// //         res.end("Its about page");
// //         break;

// //       case "/signup":
// //         if (req.method === "GET") {
// //           res.end("This is signup page");
// //         } else if (req.method === "POST") {
// //           res.end("Signup success");
// //         }
// //         break;

// //       default:
// //         res.statusCode = 404;
// //         res.end("404 Not Found");
// //     }
// //   });
// // }

// const myServer = http.createServer(app);

// myServer.listen(8000, () => console.log("Server Started !!"))

// const http = require("http");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("Its Home Page");
});

app.get("/about", (req, res) => {
  return res.send("Its about  Page");
});

app.listen(8000);

// const myServer = http.createServer(app);

// myServer.listen(8000, () => {
//   console.log("Server Started !!");
// });
