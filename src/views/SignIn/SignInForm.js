import React from "react";
import { Field, reduxForm } from "redux-form"

import { withStyles } from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

import styles from "./styles";

class SignInForm extends React.Component {
	renderTextField = ({ input, label }) => (
		<TextField
			variant="outlined"
			margin="normal"
			required
			fullWidth
			autoFocus
			label={label}
			{...input}
		/>
	)

	render() {
		// const { classes } = this.props;

		return (
			<form noValidate>
				<Field
					name="username"
					component={this.renderTextFieldn}
					label="User name"
				/>
				<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					id="password"
					label="Password"
					name="password"
					value="One23456!"
					type="password"
				/>
				<FormControlLabel
					control={<Checkbox value="remember" color="primary" />}
					label="Remember me"
				/>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
				>
					Login
				</Button>
			</form>
		);
	}
}

export default reduxForm({
 form: "signInForm",
})(SignInForm);