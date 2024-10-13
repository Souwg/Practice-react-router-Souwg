import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";


export const DescriptionPlanets = () =>{
    const { store } = useContext(Context);
    const { id } = useParams();
    const Navigate = useNavigate()

    const planet = store.planets[id]

    if(!planet) {
		return <p>Planeta no encontrado...</p>;
	}
    return(
        <div className="container">
				<div className="row">
					<div className="col mt-2 ps-5"><img className="img-fluid " src={planet.planetUrl} style={{ width: '28vw', height: '70vh', objectFit: 'cover', }}></img></div>
					<div className="col mt-2"><h2 className="text-center">{planet.name}</h2>
					<p className="text-justify">Star Wars is one of the most iconic cinematic sagas in pop culture, created by George Lucas in 1977. Set in a galaxy far, far away, the story blends elements of fantasy, science fiction, and mythology. Throughout its episodes, we follow the struggle between the dark side and the light side of the Force, embodied in the conflicts between the Sith and the Jedi. The main narrative revolves around the fall and redemption of key characters like Anakin Skywalker and his son, Luke Skywalker.</p></div>
				</div>
				<div className="row mt-2" style={{ borderTop: '2px solid #F20404' }}>
					<div className="col text-danger text-center mt-2"><h5>Name</h5><p className="text-danger text-center">{planet.name}</p></div>
					<div className="col text-danger text-center mt-2"><h5>Climate</h5><p className="text-danger text-center ">{planet.climate}</p></div>
					<div className="col text-danger text-center mt-2"><h5>Population</h5><p className="text-danger text-center">{planet.population}</p></div>
					<div className="col text-danger text-center mt-2"><h5>Orbital Period</h5><p className="text-danger text-center">{planet.orbital_period}</p></div>
					<div className="col text-danger text-center mt-2"><h5>Rotation Period</h5><p className="text-danger text-center">{planet.rotation_period}</p></div>
					<div className="col text-danger text-center mt-2"><h5>Diameter</h5><p className="text-danger text-center">{planet.diameter}</p></div>
				</div>
				</div>
    )
};