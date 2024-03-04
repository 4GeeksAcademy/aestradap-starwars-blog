import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const InfoCard = ({ item, film }) => {
	const { store, actions } = useContext(Context);
	const itemName = film ? item.properties.title : item.name;
	const favorite = store.favorites.find(element => element === itemName);
	
	return <>
		<div className="card" style={{width: "14rem"}} >
			<img src="..." className="card-img-top bg-secondary ratio ratio-4x3" alt="..."/>
			<div className="card-body">
				<h5 className="card-title">{itemName}</h5>
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			</div>
			<div className="d-flex justify-content-between m-2">
				<a href="#" className="btn btn-primary">Learn More!</a>
				<button type="button" 
					className={`btn btn-outline-warning ${favorite && "active"}`}
					data-bs-toggle="button"
					onClick={ () => {
						favorite 
						? actions.removeFavorite(itemName)
						:actions.addFavorite(itemName)
					} }
				>
					<i class="bi bi-heart"></i>
				</button>
			</div>
		</div>
	</>
};