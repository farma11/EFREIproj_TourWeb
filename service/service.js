var express = require('express');
var path = require('path');
var url = require('url');
var app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
    app.emit("log", req.url);
});


app.get("/*", (req, res) => {
    app.emit("log", req.url);
    var pathname = url.parse(req.url).pathname;
    res.sendFile(path.join(__dirname, "../", pathname));
});


app.on("log", req_url => {
    var pathname = url.parse(req_url).pathname;
    console.log(pathname);
});

app.listen(8080);