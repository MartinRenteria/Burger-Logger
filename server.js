let express = require("express");
let handlebars = require("express-handlebars");
let routes = require("./controllers/burgers-controller.js");
let PORT = process.env.PORT || 8080;
let app = express();

// Uses files to display infotmation from the public folder to serve static content
app.use(express.static("public"));

//Parse incoming appiication body data
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.engine("handlebars", handlebars({
defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function () {
    console.log("Listening on port: ", PORT);
});
