// Dependencies 

var express = require("express");

// Express Config

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Routes 

var htmlRoutes = require("./routes/htmlRoutes");
app.use('/', htmlRoutes);

// Listener

app.listen(PORT, function() {
    console.log("App listening on PORT:" + PORT);
});