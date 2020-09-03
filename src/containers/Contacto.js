import React, {Fragment} from 'react';
import email from './../img/email.svg'
import facebook from './../img/facebook.png'
import './scss/Contacto.scss'

const Contacto = () => {
    return(
        <div className="Contacto_container">
            <p>Hola Contacto.js</p>
            <img className="svg" src={email} />
            <img className="svg" src={facebook} />
        </div>
    )
}
export default Contacto;