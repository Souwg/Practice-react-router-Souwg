import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo.png"

export const Navbar = () => {
	const {store} = useContext(Context);

	return (
	<div className="container-fluid" style={{ background: '#eee' }}>
		<div className="container p-1">
		<nav className="navbar d-flex justify-content-between  mb-3 py-0 mt-2">
			<Link to="/"><img src={ Logo } style={{ width: '6rem' }} alt="Starwars"/></Link>
			<div className="ml-auto">			
			<button className="btn btn-primary btn-lg me-2">favorites { store.likesCounter } </button>				
			</div>
		</nav>
		</div>
	</div>
	);
};

export default Navbar