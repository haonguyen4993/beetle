import React from "react";

import {
	Avatar,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography
} from "@material-ui/core";

import {
	DashboardOutlined as DashboardIcon,
	PeopleOutlined as PeopleIcon,
	ShoppingBasketOutlined as ShoppingBasketIcon,
	SettingsOutlined as SettingIcon
} from "@material-ui/icons";

import { withStyles } from "@material-ui/core";
import styles from "./styles";

class Sidebar extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<nav className={classes.sidebar}>
				<div className={classes.logoWrapper}>
					<a href="/" className={classes.logoLink}>
						<img
							alt="Beetle logo"
							className={classes.logoImage}
							src="images/logo.png"
						/>
					</a>
				</div>
				<Divider className={classes.logoDivider} />
				<div className={classes.profile}>
					<a href="/">
						<Avatar
							alt="Admin"
							className={classes.avatar}
							src="images/avatars/admin.jpg"
						/>
					</a>
					<Typography
						className={classes.nameText}
						variant="h6"
					>
						Hao Nguyen
					</Typography>
					<Typography
						className={classes.bioText}
						variant="caption"
					>
						Brain Director
					</Typography>
				</div>
				<Divider className={classes.profileDivider} />
				<List
					component="div"
					disablePadding
				>
					<ListItem
						className={classes.listItem}
					>
						<ListItemIcon className={classes.ListItemIcon}>
							<DashboardIcon />
						</ListItemIcon>
						<ListItemText
							className={classes.ListItemText}
							primary="Dashboard"
						/>
					</ListItem>
					<ListItem
						className={classes.listItem}
					>
						<ListItemIcon className={classes.ListItemIcon}>
							<PeopleIcon />
						</ListItemIcon>
						<ListItemText
							className={classes.ListItemText}
							primary="Users"
						/>
					</ListItem>
					<ListItem
						className={classes.listItem}
					>
						<ListItemIcon className={classes.ListItemIcon}>
							<ShoppingBasketIcon />
						</ListItemIcon>
						<ListItemText
							className={classes.ListItemText}
							primary="Products"
						/>
					</ListItem>
					<ListItem
						className={classes.listItem}
					>
						<ListItemIcon className={classes.ListItemIcon}>
							<SettingIcon />
						</ListItemIcon>
						<ListItemText
							className={classes.ListItemText}
							primary="Settings"
						/>
					</ListItem>
				</List>
				<Divider className={classes.listDivider} />
			</nav>
		);
	}
}

export default withStyles(styles)(Sidebar);