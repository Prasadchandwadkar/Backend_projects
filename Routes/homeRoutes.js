const express = require("express");
const router = express.Router();
const myUser = require("../model/user_model");

router.get("/add", (req, res) => {
	res.render("form");
});
router.post("/add", (req, res) => {
	const addUser = new myUser({
		name: req.body.name,
		email: req.body.email,
		phone: req.body.phone,
	});
	const saveData = addUser.save();
	if (saveData) {
		res.redirect("/");
	} else {
		console.log("err");
	}
});

router.get("/", async (req, res) => {
	myUser.find().then((user) => {
		console.log(user);
		res.render("index", {
			mydata: user,
		});
	});
});
router.get("/edit/:id", (req, res) => {
	myUser.findByIdAndUpdate({ _id: req.params.id }).then((user) => {
		res.render("update_form", { updatedata: user });
	});
});
router.get("/delete/:id", (req, res) => {
	myUser.findByIdAndDelete({ _id: req.params.id }).then((user) => {
		res.render("/");
	});
});

router.post("/update/:id", (req, res) => {
	myUser.findByIdAndUpdate({ _id: req.params.id }, req.body).then((user) => {
		res.redirect("/");
	});
});
module.exports = router;
