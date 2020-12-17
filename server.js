const express = require('express');
const exphbs = require("express-handlebars");
const app = express();

const PORT = process.env.PORT || 7777;
var routes = require("./controllers/burger_controller");

app.use(express.static("public"));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(routes);

const con = require("./config/connection")

app.get("/ooga", (req, res) =>{
  connection.query(`CREATE TABLE burgers
  (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
  );
  `)
})

app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});