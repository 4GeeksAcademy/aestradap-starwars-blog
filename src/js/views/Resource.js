import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { PersonCard } from "./PersonCard";

export const Resource = () => {
	const { store, actions } = useContext(Context);
	
	return <>
		<div className="text-center mt-5">
			<h2>People</h2>
			{store.people.map((person, index) => {
				return (
					<PersonCard key={person.uid} person={person} />
				)
			})}
		</div>
	</>
};