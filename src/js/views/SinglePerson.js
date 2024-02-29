import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { PersonCard } from "./PersonCard";
import { useParams } from "react-router";

export const SinglePerson = (props) => {
	const { store, actions } = useContext();
	const {detail, setDetail}= useState();
    
    useEffect(() => {
        actions.getPerson(params.uid)
            .then(detailPerson => setDetail(detailPerson));
    }, []);

    return <>
        {detail !== undefined ? (
            <div className="d-flex flex-column">
                <h2>Hello person with id: {params.uid}</h2>
                <p>{detail.properties.eye_color}</p>
                <p>{detail.properties.hair_color}</p>
                <p>{detail.description}</p>
            </div>
        ) : null}
    </>
};