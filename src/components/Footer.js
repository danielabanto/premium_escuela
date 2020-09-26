import React from 'react'
import facebook from './../img/facebook.svg'
import './scss/Footer.scss'

class Footer extends React.Component {
    state = {
        mensaje: ''
    }
    handleClick = () => {
        const win = window.open(`https://wa.me/51972290613?text=${this.state.mensaje}`, '_blank');
        win.focus();
        this.setState({
            mensaje: "" 
        })
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return(
            <footer id="footer" className="Footer_container">
                <div className="form_container">
                    <p>¿Tienes dudas?...¡Escríbenos!</p>
                    <div className="input_container">
                        <textarea 
                            id="mensaje_whatsapp" 
                            type="text" 
                            placeholder="Déjanos un mensaje" 
                            onChange = {this.handleChange}
                            name = "mensaje"
                            value = {this.state.mensaje}
                        />
                        <button 
                            id="boton_whatsapp" 
                            className="email_link"
                            onClick = {this.handleClick}
                        >Enviar</button>
                    </div>
                </div>
                <div className="links_container">
                    <a href="https://www.facebook.com/Premium-Escuela-de-Conductores-133886184038047" target="_blank"><img className="img_redes" src={facebook} alt="" /></a>
                </div>
            </footer>
        )

    }
}

export default Footer
