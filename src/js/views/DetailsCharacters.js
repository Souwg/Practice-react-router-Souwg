import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Details = () => {
	const { store } = useContext(Context);
	const { id } = useParams();
	const [character, setCharacter] = useState(null);

	useEffect(()=>{
		const foundCharacter = store.characters[id - 1]
	})
	
	return(
		<>
		<h1>Si funka</h1>
		</>
	)
};
