import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { InfoCard } from "./InfoCard";

export const Resource = ({resource, index}) => {
	const { store, actions } = useContext(Context);
	
	
	return <>
		<div id="carouselExample" className="carousel slide" key={index}>
			<div className="carousel-inner">
				<div className="carousel-item active">
				<h2 className="text-secondary ms-5">{store.reNames[index]}</h2>
					<div className="container d-flex justify-content-between my-5">
						{ resource.result 
							? !resource.result.map((item)=>{ 
								// console.log(item.uid)
								// <InfoCard resourceItem={item} key={item.uid} />
								<div className="card" style={{width: "14rem"}} key ={item.uid} >
									<img src="..." className="card-img-top bg-secondary ratio ratio-4x3" alt="..."/>
									<div className="card-body">
										{/* <h5 className="card-title">{item.description}</h5> */}
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<a href="#" className="btn btn-primary">Go somewhere</a>
									</div>
								</div>
							})
							: resource.results.map((item, iterator)=>{ 
							 	
								 console.log(item.name)
								// <InfoCard resourceItem={item} key={index} />
								// <div className="card" style={{width: "14rem"}} key ={iterator} >
								// 	<img src="..." className="card-img-top bg-secondary ratio ratio-4x3" alt="..."/>
								// 	<div className="card-body">
								// 		<h5 className="card-title">{item.name}</h5>
								// 		<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								// 		<a href="#" className="btn btn-primary">Go somewhere</a>
								// 	</div>
								// </div>
							})
						}
					</div>
				</div>
			</div>
			<button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
			<hr className="hr hr-blurry bg-secondary mt-5" />
		  </div>
	</>
};