import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	 

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/" className="mx-4">
				<span className="navbar-brand mb-0 h1">StarWars</span>
			</Link>
			<div className="ml-auto mx-4 dropstart">
				
				<button className="btn btn-primary dropdown-toggle" 
						type="button" 
						data-bs-toggle="dropdown" 
						aria-expanded="false"
				>{` Favorites ${store.favorites.length}`}
				</button>
				<ul className="dropdown-menu">
				
					{ store.favorites.length > 0
						? ( store.favorites.map((item, iter) => {
								<li key={iter}>
									<a class="dropdown-item" href="#">{item}</a>
								</li>
							})
							
						)
						: null
					}
				
				</ul>
			</div>
		</nav>
	);
};
