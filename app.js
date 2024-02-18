const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const homeRoutes = require("./Routes/homeRoutes");

const app = express();
const port = process.env.PORT || 4000;

// db connecton
mongoose.connect("mongodb://localhost:27017/CRUD-prations-project", {
	useNewUrlParser: true,
});

app.set("view engine", "ejs");

app.use(express.static("public"));

// routing homeroutes

const db = mongoose.connection;

db.on("err", () => {
	console.log("err");
});

db.once("open", () => {
	console.log("connected");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", homeRoutes);

app.listen(port, () => {
	console.log("sever is runnig");
});
