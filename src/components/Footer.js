import React from 'react'
import './scss/Footer.scss'
import facebook from './../img/facebook.svg'

const Footer = () => {
    return(
        <footer id="footer" className="Footer_container">
            <div className="form_container">
                <p>¿Tienes dudas?...¡Escríbenos!</p>
                <div className="input_container">
                    <textarea id="mensaje_whatsapp" type="text" placeholder="Déjanos un mensaje" />
                    <a id="boton_whatsapp" className="email_link">Enviar</a>
                </div>
            </div>
            <div className="links_container">
                <a href="https://www.facebook.com/Premium-Escuela-de-Conductores-133886184038047" target="_blank"><img className="img_redes" src={facebook} alt="" /></a>
            </div>
        </footer>
    )
}

export default Footer
