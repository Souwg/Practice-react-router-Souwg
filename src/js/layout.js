import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Details } from "./views/DetailsCharacters";
import { DescriptionPlanets } from "./views/DetailsPlanets"
import { Characters} from "./views/home";
import { Planets } from "./views/home"
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	const basename = process.env.BASENAME || "";
	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/character/:id" element={<Details />} />
						<Route path="/planets/:id" element={<DescriptionPlanets />} />
						<Route path="/" element={ 
							<div>
							<Characters />
							<Planets />
							</div> 
						}/>
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
