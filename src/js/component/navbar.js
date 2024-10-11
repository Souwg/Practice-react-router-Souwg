import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo.png"

export const Navbar = () => {
	return (
	<div className="container-fluid" style={{ background: '#eee' }}>
		<div className="container p-1">
		<nav className="navbar mb-3 py-0 mt-2">
			<Link to="/"><img src={ Logo } style={{ width: '30%' }} alt="Starwars"/></Link>
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
