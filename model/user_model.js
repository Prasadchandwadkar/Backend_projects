const mongoose = require("mongoose");
const schema = mongoose.Schema;

let mySchema = new schema({
	name: {
		type: String,
		require: true,
	},
	email: {
		type: String,
		require: true,
	},
	phone: {
		type: String,
		require: true,
	},
});

module.exports = mongoose.model("myUserData", mySchema);
