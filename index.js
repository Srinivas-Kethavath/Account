const Express = require("express");

const expressApp = Express();

const fs = require("fs");
const path = require("path");

expressApp.get("/", function (req, res) {
    // const htmlContent = fs.readFileSync("F:\\nodejs projects\\Account\\index.html").toString();
    res.sendFile(path.join(__dirname, "index.html"));
});

expressApp.get("/Hi", function (req, res) {
    res.send("Hi");
});

expressApp.get("/timezone",function(req, res){
    res.send('["Asia","Africa"]');
})

expressApp.listen(3000, function () {
    console.log("Started listening...");
});

console.log("Hey");
// 127.0.0.1:3000/