//server.js
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
//var cs =require("./routes/cardservice");


app.use(express.static(__dirname + "/public"));    //Specify "public" folder for UI files
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//app.use("/rest/cs", cs);


app.get("/:file", function(req, res){
    var filename = req.params.file;

    res.sendFile(__dirname + "/public/" + filename + ".html");
});

app.listen(3000);

console.log("Server started!");
