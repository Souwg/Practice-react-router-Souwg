import React, { useState, useContext } from "react"
import { Context } from "../store/appContext";

export const Prueba = () =>{
    
    const {store} = useContext(Context);

    return (
        <div className="container">
            <div className="title text-danger mt-4 mb-4"><h3>Characters</h3></div>
            <div className="row">
                {store.characters.map((character, index) => (
                        <div key={index} className="col-md-4"> {/* Coloca las cartas en columnas */}
                            <div className="card">
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{character.name}</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Gender: {character.gender}</li>
                            <li className="list-group-item">A second item</li>
                            <li className="list-group-item">A third item</li>
                        </ul>
                        <div className="card-body">
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                         </div>
                    </div>
                        </div>
                    ))};
            </div>
        </div>
    );
};       ;


export const Card = () =>{
    const [card, setCard] = useState([
        { id: 1, nombre: 'Sousan', edad: 29 },
        { id: 2, nombre: 'Alberto', edad: 31 },
        { id: 3, nombre: 'Matias', edad: 7 },
        { id: 4, nombre: 'Soupita', edad: 120 },
        { id: 5, nombre: 'pingu', edad: 120 },
    ])

    return(
        <>
        <div className="container">
            <div className= "title text-danger mt-4 mb-5"><h3>Planets</h3></div>
            <div className="row">
                {card.map(cartas =>(
                <div className="col" key={cartas.id}>
                        <div className="card">
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"></h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">An item</li>
                            <li className="list-group-item">A second item</li>
                            <li className="list-group-item">A third item</li>
                        </ul>
                        <div className="card-body">
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                         </div>
                    </div>
                </div>
                ))}
            </div>    
        </div>
        </>
    )

}