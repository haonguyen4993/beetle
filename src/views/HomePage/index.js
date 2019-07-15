import React from "react";

import Topbar from "../../components/Topbar";
import Slider from "../../components/Slider";

const HomePage = () => {
	return (
		<React.Fragment>
			<Topbar />
			<main>
				<Slider />
			</main>
		</React.Fragment>
	);
}

export default HomePage;