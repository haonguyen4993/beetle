import axios from "axios";

export default axios.create({
	baseURL: "dhshop.herokuapp.com",
	auth: {
		username: "devclient",
		password: "One23456!"
	}
});