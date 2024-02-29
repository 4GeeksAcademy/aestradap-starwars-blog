import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { PersonCard } from "./PersonCard";

export const InfoCard = () => {
	const { store, actions } = useContext(Context);
	
	return <>
		<div className="text-center mt-5">
			<h2>InfoCard</h2>
			
		</div>
	</>
};