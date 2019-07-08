import React from "react";

import { connect } from "react-redux";
import { callSignIn } from "../../actions/auth";

import { withStyles } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

import styles from "./styles";


class SignIn extends React.Component {
	onSignInClick = (event) => {
		event.preventDefault();
		this.props.callSignIn();
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
							<form className={classes.form} noValidate>
								<TextField
									variant="outlined"
									margin="normal"
									required
									fullWidth
									id="email"
									label="Email"
									name="email"
									value="admin"
									autoFocus
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
									className={classes.submit}
									onClick={this.onSignInClick}
								>
									Login
								</Button>
							</form>
						</div>
					</Grid>
					<Grid item xs={false} md={7} className={classes.image} />
				</Grid>
			</div>
		);
	}
}

// const mapStateToProps = (state) => {
// 	return {
// 		isSignedIn: state.auth.isSignedIn
// 	}
// }

// export default withStyles(styles)(SignIn);
export default connect(
	null,
	{ callSignIn }
)(withStyles(styles)(SignIn));
