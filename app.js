const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

let item = [];

app.get("/", function (req, res) {
    res.render("index", { newItem: item });
});

app.use(express.static("public"));

app.post("/", function (req, res) {
    item.push(req.body.newItem);
    res.redirect("/");
});
app.use(bodyParser.json());
app.post('/removeItem', (req, res) => {
    const { index } = req.body;
    console.log(index);

    // Remove the item from the array
    item.splice(index, 1);

    // Send a response indicating success
    res.json({ success: true });
});

app.listen(3000, function () {
    console.log("The server has been run on localhost:3000");
});
