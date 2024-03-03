import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Resource } from "./Resource";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const resources = store.rootResources;

	
	return <>
		{resources.map((resource, index) =>
			<Resource resource={resource} index={index}/>
		)}
	</>
};