var express = require("express");
var bodyParser = require("body-parser");
var hbs = require("hbs");
var fs = require("fs");

var app = express();

hbs.registerPartials("/home/flisoch/IdeaProjects/jsWebApp/views/partials");
app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/reg", function(request, response){

    response.render('/home/flisoch/IdeaProjects/jsWebApp/views/registration.hbs');
});

app.post("/reg",function (request,response) {

    var userName = request.body.user.name;
    var pass = request.body.user.password;
    fs.appendFile("users.txt", userName + " " + pass + "\n");

    response.redirect('/game');
})

app.get("/users",function (request,response) {
    response.sendFile('/home/flisoch/IdeaProjects/jsWebApp/src/users.txt');

})

app.get("/game",function (request,response) {
    response.render('/home/flisoch/IdeaProjects/jsWebApp/views/game.hbs');
})

app.post("/records",function (request,response) {
    //Todo:сохранять записи нормально
    fs.appendFile("records.txt", request.body);
    console.log(request.body)
})
app.get("/records",function (request,response) {
    response.sendFile('/home/flisoch/IdeaProjects/jsWebApp/src/records.txt');

})

app.get("/",function (request,response) {
    response.render("/home/flisoch/IdeaProjects/jsWebApp/views/index.hbs")
})

app.listen(3000);
