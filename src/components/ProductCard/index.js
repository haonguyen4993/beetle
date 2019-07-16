import React from "react";

import { Typography } from "@material-ui/core";

import { withStyles } from "@material-ui/core";
import styles from "./styles";

class ProductCard extends React.Component {
	render() {
		const { classes, product } = this.props;

		return (
			<a href="#" className={classes.product}>
				<img
					alt="product name"
					className={classes.productImage}
					src={product.image}
				/>
				<div className={classes.productContent}>
					<Typography component="p" variant="h5">
						{product.name}
					</Typography>
				</div>
			</a>
		);
	}
}

export default withStyles(styles)(ProductCard);