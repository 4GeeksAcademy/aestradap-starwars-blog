import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";


export const InfoDetail = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	
	const myDetail = store.detail;
    const film = store.detail._id ? true : false;
	const dName = film ? myDetail.properties.title : myDetail.properties.name;
	const dDescription = film ? myDetail.properties.opening_crawl : myDetail.description;
	const dRelease = film ? myDetail.properties.release_date : myDetail.properties.birth_year;

	return <>
		<div className="text-center">
			<h2>{params.userId}</h2>
			<div className="card p-4 m-4" >
				<div className="row g-0">
					<div className="col-md-4 bg-secondary">
						<img src="..."
						className="img-fluid rounded-start"
						alt="..."/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{dName}</h5>
							<p className="card-text">
								{dDescription}
							</p>
							<p className="card-text">
								<small className="text-body-secondary">{dRelease}</small>
								</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
};
