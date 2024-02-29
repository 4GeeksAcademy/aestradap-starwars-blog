import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	
	return <>
		<div className="container mt-5">
			<h2>center</h2>
			<div className="card" style={{width: "18rem"}}>
				<img src="..." style={{background: "grey", height: 180, width: 286}} className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" className="btn btn-primary">Go somewhere</a>
				</div>
			</div>
		</div>
	</>
};