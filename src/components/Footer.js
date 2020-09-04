import React from 'react'
import './scss/Footer.scss'

const Footer = () => {
    return(
        <footer id="footer" className="Footer_container">
            <div className="container">
                <div className="form_container">
                    <p>¿Tienes dudas?...¡Escríbenos!</p>
                    <div className="input_container">
                        <input id="mensaje_whatsapp" type="text" placeholder="Déjame un mensaje" />
                        <a id="boton_whatsapp" className="email_link">Enviar</a>
                    </div>
                </div>
                <div className="links_container">
                    <a href="https://www.facebook.com/daniel.abantohernandez" target="_blank"><img class="img_redes" src="img/facebook.svg" alt="" /></a> 
                    <a href="https://github.com/danielabanto" target="_blank"><img class="img_redes" src="img/github.svg" alt="" /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
