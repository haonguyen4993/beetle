import React from "react";

import {
	Toolbar,
	Typography,
	AppBar,
	Link
} from "@material-ui/core";

import {
	SearchOutlined as SearchIcon,
	ShoppingBasketOutlined as ShoppingBasketIcon,
	Menu as MenuIcon

} from "@material-ui/icons";

import { withStyles } from "@material-ui/core";
import styles from "./styles";

class Topbar extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<div className={classes.topbar}>
				<AppBar className={classes.appbar} position="static" color="default">
					<Toolbar className={classes.toolbar}>
						<div className={classes.logoWrapper}>
							<a href="/" className={classes.logoLink}>
								<img
									alt="Beetle logo"
									className={classes.logoImage}
									src="images/logo.png"
								/>
							</a>
						</div>
						<nav>
	            <Link
	            	variant="button"
	            	color="textPrimary"
	            	href="#"
	            	className={classes.link}>
	              <SearchIcon />
	            </Link>
	            <Link
	            	variant="button"
	            	color="textPrimary"
	            	href="#"
	            	className={classes.link}>
	              <ShoppingBasketIcon />
	            </Link>
	            <Link
	            	variant="button"
	            	color="textPrimary"
	            	href="#"
	            	className={classes.link}>
	              <MenuIcon />
	            </Link>
	          </nav>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default withStyles(styles)(Topbar);