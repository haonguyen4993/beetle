import React from "react";

import {
	Grid,
	Typography,
	Paper,
	Button
} from "@material-ui/core";

import { withStyles } from "@material-ui/core";
import styles from "./styles";

class Slider extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<div className="slider">
				<Grid className={classes.item} container spacing={0}>
					<Grid className={classes.contentWraper} item xs={false} md={6}>
						<div className={classes.content}>
							<Typography className={classes.subtitle} component="p" variant="subtitle1">
								New Arrived
							</Typography>
							<Typography className={classes.title} component="h3" variant="h2">
								Unisex Backpack
							</Typography>
							<Button
								variant="outlined"
	            	href="#"
	            	color="primary"
	            	className={classes.link}>
	              SHOP NOW
	            </Button>
						</div>
					</Grid>
					<Grid item xs={12} md={6} className={classes.image} />
				</Grid>
			</div>
		);
	}
}

export default withStyles(styles)(Slider);