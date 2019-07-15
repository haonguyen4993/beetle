import React from "react";

import { connect } from "react-redux";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";

import SignIn from "./views/SignIn";
import Dashboard from "./views/Dashboard";
import HomePage from "./views/HomePage";
import theme from "./theme";

class App extends React.Component {
	renderContent() {
		if (this.props.isSignedIn) {
			return <Dashboard />
		} else {
			return <HomePage />
		}
	}

	render() {
		return (
			<React.Fragment>
				<CssBaseline />
				<ThemeProvider theme={theme}>
					{this.renderContent()}
				</ThemeProvider>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isSignedIn: state.auth.isSignedIn
	};
}

export default connect(
	mapStateToProps
)(App);