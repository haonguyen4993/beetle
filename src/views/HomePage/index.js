import React from "react";

import {
	Typography,
	Grid } from "@material-ui/core";

import Topbar from "../../components/Topbar";
import Slider from "../../components/Slider";
import Categories from "../../components/Categories";
import ProductCard from "../../components/ProductCard";

const renderTrendingList = () => {
	const trendings = [
		{
			id: 1,
			name: "Something Else",
			image: "images/products/bag6.jpg"
		},
		{
			id: 2,
			name: "Cute",
			image: "images/products/bag7.jpg"
		},
		{
			id: 3,
			name: "Backbag",
			image: "images/products/bag8.jpg"
		},
		{
			id: 4,
			name: "Sidebag",
			image: "images/products/bag9.jpg"
		},
		{
			id: 5,
			name: "Sidebag",
			image: "images/products/bag10.jpg"
		},
		{
			id: 6,
			name: "Sidebag",
			image: "images/products/bag11.jpg"
		},
		{
			id: 7,
			name: "Sidebag",
			image: "images/products/bag12.jpg"
		},
		{
			id: 8,
			name: "Sidebag",
			image: "images/products/bag1.jpg"
		},
		{
			id: 9,
			name: "Sidebag",
			image: "images/products/bag9.jpg"
		},
		{
			id: 10,
			name: "Sidebag",
			image: "images/products/bag8.jpg"
		}
	];
	return trendings.map((product) =>{
		return (
			<Grid key={product.id} item xs={4}>
				<ProductCard product={product}/>
			</Grid>
		);
	});
}

const HomePage = () => {
	return (
		<React.Fragment>
			<Topbar />
			<main>
				<Slider />
				<Categories />
				<div className="trending-list">
					<Grid container spacing={0}>
						<Grid item xs={4}>
							<Typography component="p" variant="h4">
								Trending
							</Typography>
						</Grid>
						{ renderTrendingList() }
						<Grid item xs={4}>
							<Typography component="p" variant="h4">
								Want More?
							</Typography>
						</Grid>
					</Grid>
				</div>
			</main>
		</React.Fragment>
	);
}

export default HomePage;