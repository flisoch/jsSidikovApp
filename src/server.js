var express = require("express");
var bodyParser = require("body-parser");

var fs = require("fs");

var app = express();

app.set("view engine", "hbs");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/reg", function(request, response){

    response.sendFile('/home/flisoch/IdeaProjects/jsWebApp/public/registration.html');
});

app.post("/reg",function (request,response) {

    var userName = request.body.user.name;
    var pass = request.body.user.password;
    fs.appendFile("users.txt", userName + " " + pass + "\n");

    response.sendFile('/home/flisoch/IdeaProjects/jsWebApp/public/game.html');
})


app.get("/test",function (request,response) {
    response.sendFile('/home/flisoch/IdeaProjects/jsWebApp/public/game.html');
})

app.get("/",function (request,response) {
    response.sendFile("/home/flisoch/IdeaProjects/jsWebApp/public/index.html")
})
app.post("/records",function (request,response) {
    fs.appendFile("records.txt", request.body.toString());
    console.log(request.body)
})

app.get("/records",function (request,response) {
    var text = fs.readFile("records.txt");
    console.log()
})

app.listen(3000);