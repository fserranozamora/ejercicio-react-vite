import "./card.css"
import { Link } from "react-router-dom";

function Card ({nombre = "nombre", edad = "edad", puesto = "puesto", correo = "correo"}) {
    return(
        <div className="card">
           <Link to={nombre}>
            <h2>{nombre}</h2>
            </Link>
            <p>{edad}</p>
            <p>{puesto}</p>
            <p>{correo}</p>
        </div>
        
    )
}

export default Card;