import axios from "axios";

export default axios.create({
	baseURL: "https://dhshop.herokuapp.com",
	headers: {
		"Content-Type": "application/x-www-form-urlencoded"
	},
	auth: {
		username: "devclient",
		password: "One23456!"
	}
});