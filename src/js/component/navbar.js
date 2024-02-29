import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/" className="mx-4">
				<span className="navbar-brand mb-0 h1">StarWars</span>
			</Link>
			<div className="ml-auto mx-4">
				<Link to="/demo">
					<button className="btn btn-primary">favorites</button>
				</Link>
			</div>
		</nav>
	);
};
