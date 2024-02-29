
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const PersonCard = ({ person }) => {
	const { store, actions } = useContext(Context);
    const {detail, setDetail}= useState();
    useEffect(()=>{
        actions.getPerson(person.uid)
        .them(detailPerson => setDetail(detailPerson))

    },[]);

	return (
		<div className="card" style="width: 18rem;">
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{person.name}</h5>
    <p className="card-text">{detail.properties.eye_color}</p>
    <p className="card-text">{detail.properties.hair_color}</p>

    <Link href="#" className="btn btn-primary">Go somewhere</Link>
  </div>
</div> 

	);
};