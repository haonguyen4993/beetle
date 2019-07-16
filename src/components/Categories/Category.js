import React from "react";

import {
	Typography
} from "@material-ui/core";

import { withStyles } from "@material-ui/core";
import styles from "./styles";

class Category extends React.Component {
	render() {
		const { classes, category } = this.props;

		return (
			<a href="#" className={classes.category}>
				<img
					alt="category name"
					className={classes.categoryImage}
					src={category.image}
				/>
				<div className={classes.categoryContent}>
					<Typography component="p" variant="h5">
						{category.name}
					</Typography>
				</div>
			</a>
		);
	}
}

export default withStyles(styles)(Category);