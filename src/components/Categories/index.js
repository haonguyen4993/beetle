import React from "react";

import {

} from "@material-ui/core";

import { withStyles } from "@material-ui/core";
import styles from "./styles";

import Item from "./Item";

class Categories extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<div className="categories">
				<div className={classes.header}>
					<Typography component="p" variant="h3">
						New Arrivals
					</Typography>
				</div>
				<div className={classes.categories}>
					<Grid container spacing={0}>
						<Grid item xs={6}>
							<Item />
						</Grid>
						<Grid item xs={6}>
							<Item />
						</Grid>
						<Grid item xs={6}>
							<Item />
						</Grid>
						<Grid item xs={6}>
							<Item />
						</Grid>
					</Grid>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(Categories);