import React from "react";
import { Field, reduxForm } from "redux-form"

import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

class SignInForm extends React.Component {
	renderTextField = ({ input, label, meta, ...custom }) => (
		<TextField
			variant="outlined"
			margin="normal"
			required
			fullWidth
			label={label}
			{...input}
			{...custom}
		/>
	);

	onSubmit = (formValues) => {
		this.props.onSubmit(formValues);
	}

	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmit)} noValidate>
				<Field
					name="username"
					component={this.renderTextField}
					label="User Name"
				/>
				<Field
					name="password"
					component={this.renderTextField}
					label="Password"
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