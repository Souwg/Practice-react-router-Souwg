import React from "react";
import { Link } from "react-router-dom";
import Starwars from "../../img/Starwars.jpg";
import starwars from "../../img/starwars.jpg"

export const Navbar = () => {
	return (
	<div className="container-fluid bg-black">
		<div className="container">
		<nav className="navbar mb-3 py-0">
			<Link to="/"><img src={ starwars } style={{ width: '14%' }} alt="Starwars"/></Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary me-2">favorites</button>
				</Link>
			</div>
		</nav>
		</div>
	</div>
	);
};
