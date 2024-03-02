import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	
	return <>
	<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div className="container d-flex justify-content-between mt-5">
			<div className="card" style={{width: "18rem"}}>
				<img src="..." style={{background: "grey", height: 180, width: 286}} className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" className="btn btn-primary">Go somewhere</a>
				</div>
			</div>
      		<div className="card" style={{width: "18rem"}}>
				<img src="..." style={{background: "grey", height: 180, width: 286}} className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" className="btn btn-primary">Go somewhere</a>
				</div>
			</div>
      <div className="card" style={{width: "18rem"}}>
				<img src="..." style={{background: "grey", height: 180, width: 286}} className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" className="btn btn-primary">Go somewhere</a>
				</div>
			</div>
		</div>
    </div>
    <div class="carousel-item">
    <div className="container mt-5">
			<div className="card" style={{width: "18rem"}}>
				<img src="..." style={{background: "grey", height: 180, width: 286}} className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" className="btn btn-primary">Go somewhere</a>
				</div>
			</div>
		</div>
    </div>
    <div class="carousel-item">
    <div className="container mt-5">
			<div className="card" style={{width: "18rem"}}>
				<img src="..." style={{background: "grey", height: 180, width: 286}} className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" className="btn btn-primary">Go somewhere</a>
				</div>
			</div>
		</div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
	
	</>
};