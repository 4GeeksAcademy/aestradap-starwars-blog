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
				
				<button className={`btn btn-primary dropdown-toggle
				 ${ store.favorites.length === 0 && "disabled"}`}
						type="button" 
						data-bs-toggle="dropdown" 
						aria-expanded="false"
				>{` Favorites ${store.favorites.length}`}
				</button>	

				<ul className={`dropdown-menu ${store.favorites.length == 0 ? "d-none" : null}`}>
				{ store.favorites.length != 0 
					?
						( store.favorites.map(( item, iter ) => {
						return (
							<li key={iter} 
								className="d-flex
									justify-content-center 
									align-items-baseline p-2"
							>
								<p className="dropdown-item">{item}</p>
								<button type="button" 
									class="btn btn-sm btn-link"
									onClick={ () => actions.removeFavorite(item) }
								>
									<i class="bi bi-trash"></i>
								</button>
							</li>
						);
						}))
					: null
				}
				</ul>
			</div>
		</nav>
	);
};
