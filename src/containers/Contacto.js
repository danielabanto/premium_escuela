import React, {Fragment} from 'react';
import email from './../img/email.svg'
import facebook from './../img/facebook.png'

const Contacto = () => {
    return(
        <Fragment>
            <p>Aqui ponemos las formas de contacto</p>
            <img className="svg" src={email} />
            <img className="svg" src={facebook} />
        </Fragment>
    )
}
export default Contacto;