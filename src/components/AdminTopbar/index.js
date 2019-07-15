import React from "react";

import {
	IconButton,
	Toolbar,
	Typography
} from "@material-ui/core";

import {
	Menu as MenuIcon,
	Close as CloseIcon,
} from "@material-ui/icons";

import { withStyles } from "@material-ui/core";
import styles from "./styles";

class AdminTopbar extends React.Component {
	state = {
		isSidebarOpen: true
	};

	toggleSidebar = () => {
		this.setState({
			isSidebarOpen: !this.state.isSidebarOpen
		});
	}

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.topbar}>
				<Toolbar className={classes.toolbar}>
					<IconButton
						className={classes.menuButton}
						variant="text"
						onClick={this.toggleSidebar}
					>
						{ this.state.isSidebarOpen ? <CloseIcon /> : <MenuIcon /> }
					</IconButton>
					<Typography
						className={classes.title}
						variant="h4"
					>
						Dashboard
					</Typography>
				</Toolbar>
			</div>
		);
	}
}

export default withStyles(styles)(AdminTopbar);