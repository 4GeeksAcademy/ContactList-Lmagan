import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import AddContact from "./views/AddContact";
import Contacts from "./views/Contacts";
import EditContact from "./views/EditContact";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";


import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					
					<Routes>
						<Route path="/" element={<Contacts/>} />
						<Route path="/EditContact/:id" element={<EditContact />} />
						<Route path="/AddContact" element={<AddContact />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
