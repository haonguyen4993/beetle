import React from "react";

import { connect } from "react-redux";
import { callSignIn } from "../../actions/auth";

import { withStyles } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import styles from "./styles";

import SignInForm from "./SignInForm";


class SignIn extends React.Component {
	onSignInClick = (formValues) => {
		this.props.callSignIn(formValues);
	}

	render() {
		const { classes } = this.props;

		return (
			<div className="signin-page">
				<Grid container spacing={0}>
					<Grid item xs={12} md={5} component={Paper}>
						<div className={classes.paper}>
							<Avatar className={classes.avatar} src="images/logo.png" />
							<Typography component="h1" variant="h5">
								Login
							</Typography>
							<SignInForm
								onSubmit={this.onSignInClick}
							/>
						</div>
					</Grid>
					<Grid item xs={false} md={7} className={classes.image} />
				</Grid>
			</div>
		);
	}
}

export default connect(
	null,
	{ callSignIn }
)(withStyles(styles)(SignIn));
