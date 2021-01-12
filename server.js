let express = require("express");
let handlebars = require("express-handlebars");

let PORT = process.env.PORT || 8080;
let app = express();

// Uses files to display infotmation from the public folder to serve static content
app.use(express.static("public"));

//Parse incoming appiication body data
app.use(express.uriencoded({
    extended: true
}));

app.use(express.json());

let handlebars = require("express-handlebars");

app.engine("handlebars", handlebars);

let routes = require("./controllers/burgers-controller.js");

app.use(routes);

app.listen(PORT, function () {
    console.log("Listening on port: ", PORT);
});
