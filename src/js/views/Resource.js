import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { InfoCard } from "./InfoCard";

export const Resource = ({resource, index}) => {
	const { store, actions } = useContext(Context);
	
	
	return <>
		<div id={"carouselExample" + index } className="carousel slide" key={index}>
			<div className="carousel-inner">
			<h2 className="text-secondary ms-5">{store.reNames[index]}</h2>
				<div className="carousel-item active">
					<div className="container d-flex justify-content-between my-5">
						{ resource.result 
							? (
								resource.result.map(( item, iter ) => { 
									return (iter <= 4 &&
										<InfoCard film item={item} key={iter} />
									);
								  })
							)
							: (
								resource.results.map(( item, iter ) => {
									return (iter <= 4 &&
										<InfoCard item={item} key={iter} />
									);
								})
							)
						}
					</div>
				</div>
				<div className="carousel-item ">
					<div className="container d-flex justify-content-between my-5">
						{ resource.result 
							? (
								resource.result.map(( item, iter ) => { 
									return (iter >= 5 &&
										<InfoCard film item={item} key={iter} />
									);
								  })
							)
							: (
								resource.results.map(( item, iter ) => {
									return (iter >= 5 &&
										<InfoCard item={item} key={iter} />
									);
								})
							)
						}
					</div>
				</div>
			</div>
			<button className="carousel-control-prev" type="button" data-bs-target={"#" + "carouselExample" + index } data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button className="carousel-control-next" type="button" data-bs-target={"#" + "carouselExample" + index } data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
			<hr className="hr hr-blurry bg-secondary mt-5" />
		  </div>
	</>
};