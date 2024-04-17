const express = require("express");
const hbs = require("hbs");
const fs = require("fs");
const app = express();

app.listen(3000);
app.set("view engine", "hbs");
app.set("views", "./views");
app.use(express.static("public"));
app.use(express.static(__dirname + '/uploads'));
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res) => {
    fs.readFile("./data/data.json", (err, dt) => {
        if (err) throw err
        const data = JSON.parse(dt);
        const arrData = Object.keys(data).map(key => data[key]);
        res.render("index", {arrData});
    });
});

app.get("/tarjeta", (req, res) => {
    res.render("tarjeta", {prueba: "TARJETAS"});
});
