import React, { Fragment, useState, useEffect } from 'react'
import './scss/Header.scss'

const Header = () => {
    const [somos, setSomos] = useState('')
    const [servicios, setServicios] = useState('')
    useEffect(() => {
        cambiar();
        addEventListener('resize', cambiar)
    }, [window.innerWidth])
    const cambiar = () => {
        if (window.innerWidth<768) {
            setSomos('NOSOSTROS')
            setServicios('SERVICIOS')
        } else {
            setSomos('QUIENES SOMOS')
            setServicios('NUESTROS SERVICIOS')
        }
    }
    return(
        <Fragment>
        <header>
            <h1>"PREMIUM"</h1>
            <h2>ESCUELA DE CONDUCTORES</h2>
        </header>
        <div className="navbar">
            <ul>
                <li><a href="#home">HOME</a></li>
                <li><a href="#somos">{somos}</a></li>
                <li><a href="#servicios">{servicios}</a></li>
                <li><a href="#ubicanos">UBICANOS</a></li>
            </ul>
        </div>
        </Fragment>
    )}

export default Header
