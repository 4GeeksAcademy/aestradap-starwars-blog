import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const InfoCard = ({resourceItem, index}) => {
	const { store, actions } = useContext(Context);
	console.log("resourceItem",resourceItem);
	return <>
		<div className="card" style={{width: "14rem"}} key ={index} >
			<img src="..." className="card-img-top bg-secondary ratio ratio-4x3" alt="..."/>
			<div className="card-body">
				{/* <h5 className="card-title">{resourceItem.name}</h5> */}
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				<a href="#" className="btn btn-primary">Go somewhere</a>
			</div>
		</div>
	</>
};