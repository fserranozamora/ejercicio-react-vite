import React from "react";
import "./EquipoVistas.css"

function EquipoVistas({ eq }) {
    return (
        <div className="eqvista">
            <img src= {eq.image} alt= {eq.image + "image"}></img>
            <h1>{eq.nNombre}</h1>
            <h2>{eq.nEdad}</h2>
            <h2>{eq.nPuesto}</h2>
            <h2>{eq.nCorreo}</h2>
        </div>
    )
}

export default EquipoVistas;