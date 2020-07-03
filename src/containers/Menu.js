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
                <li><Link to="https://danielabanto.github.io/premium_escuela/dist/">Home</Link></li>
                <li><Link to="https://danielabanto.github.io/premium_escuela/dist/somos">Quienes somos</Link></li>
                <li><Link to="https://danielabanto.github.io/premium_escuela/dist/servicios">Nuestros servicios</Link></li>
                <li><Link to="https://danielabanto.github.io/premium_escuela/dist/ubicanos">Ubicanos</Link></li>
                <li><Link to="https://danielabanto.github.io/premium_escuela/dist/contacto">Contacto</Link></li>
            </ul>
            </div>
            <h2 className="gray"><i>...En construcción...</i></h2>
        </div>
    )
}

export default Menu;
