import React from "react";

import {
	Typography,
	Grid
} from "@material-ui/core";

import { withStyles } from "@material-ui/core";
import styles from "./styles";

import Category from "./Category";

class Categories extends React.Component {
	renderCategories() {
		const categories = [
			{
				id: 1,
				name: "Something Else",
				image: "images/categories/bag5.jpg"
			},
			{
				id: 2,
				name: "Cute",
				image: "images/categories/bag4.jpg"
			},
			{
				id: 3,
				name: "Backbag",
				image: "images/categories/bag3.jpg"
			},
			{
				id: 4,
				name: "Sidebag",
				image: "images/categories/bag2.jpg"
			}
		];

		return categories.map((category) =>{
			return (
				<Grid key={category.id} item xs={3}>
					<Category category={category}/>
				</Grid>
			);
		});
	}

	render() {
		const { classes } = this.props;

		return (
			<div className="categories">
				<div className={classes.header}>
					<Typography component="p" variant="h4">
						New Arrivals
					</Typography>
				</div>
				<div className={classes.categories}>
					<Grid container spacing={0}>
						{ this.renderCategories() }
					</Grid>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(Categories);