import React from "react";

import { Drawer } from "@material-ui/core";

import Topbar from "../../components/AdminTopbar";
import Sidebar from "../../components/AdminSidebar";

class Dashboard extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Topbar />
				<Drawer anchor="left" open={true} variant="persistent">
					<Sidebar />
				</Drawer>
			</React.Fragment>
		);
	}
}

export default Dashboard;