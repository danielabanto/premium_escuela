import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.scss'

const Menu = () => {
    return(
        <React.Fragment>
            <header>
                <h1>"PREMIUM"</h1>
                <h2>ESCUELA DE CONDUCTORES
                </h2>
            </header>
            <div className="navbar">
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/somos">QUIENES SOMOS</Link></li>
                    <li><Link to="/servicios">NUESTROS SERVICIOS</Link></li>
                    <li><a href="https://wa.me/51942301576?text=Hola%20amigo" target="_blank">WS</a></li>
                    <li><Link to="/ubicanos">UBICANOS</Link></li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Menu;
