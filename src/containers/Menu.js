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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/somos">Quienes somos</Link></li>
                    <li><Link to="/servicios">Nuestros servicios</Link></li>
                    <li><Link to="/ubicanos">Ubicanos</Link></li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Menu;
