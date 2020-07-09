import React, {Fragment} from 'react';
import email from './../img/email.svg'
import facebook from './../img/facebook.png'
import './Contacto.scss'

const Contacto = () => {
    return(
        <Fragment>
            <p>Formas de contacto</p>
            <img className="svg" src={email} />
            <img className="svg" src={facebook} />
        </Fragment>
    )
}
export default Contacto;