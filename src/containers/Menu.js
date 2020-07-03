import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return(
        <div className="App">
            <header>
            <h1>Premium Escuela de Conductores</h1>
            </header>
            <div className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/somos">Quienes somos</Link></li>
                <li><Link to="/servicios">Nuestros servicios</Link></li>
                <li><Link to="/ubicanos">Ubicanos</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>
            </div>
            <h2 className="gray"><i>...En construcción...</i></h2>
        </div>
    )
}

export default Menu;
