import React, { Fragment, useState, useEffect } from 'react'
import './scss/Header.scss'
import menu from '../img/menu.svg'

const Header = () => {
    const [somos, setSomos] = useState('')
    const [servicios, setServicios] = useState('')

    useEffect(() => {
        cambiar();
        addEventListener('resize', cambiar)
    }, [window.innerWidth])
    const cambiar = () => {
        
        const menu = document.getElementById('menu')
        if (window.innerWidth<768) {
            setSomos('NOSOSTROS')
            setServicios('SERVICIOS')
        } else {
            setSomos('QUIENES SOMOS')
            setServicios('NUESTROS SERVICIOS')
        }
        if (window.innerWidth<481){
            document.getElementById('navbar_list').classList.add('none')
        }
    }
    
    const handleClickImg = (e) =>{
        document.getElementById('navbar_list').classList.toggle('none')
    }
    const handleClick = (e) =>{
        document.getElementById('navbar_list').classList.toggle('none')
    }
    return(
        <Fragment>
        <header>
            <h1>"PREMIUM"</h1>
            <h2>ESCUELA DE CONDUCTORES</h2>
        </header>
        <div className="navbar">
            <img src={menu} onClick={handleClickImg} className="hamburger_menu" id="menu"/>
            <ul id="navbar_list" className="navbar_list">
                <li><a onClick={handleClick} className="navbar_element" href="#home">HOME</a></li>
                <li><a onClick={handleClick} className="navbar_element" href="#somos">{somos}</a></li>
                <li><a onClick={handleClick} className="navbar_element" href="#servicios">{servicios}</a></li>
                <li><a onClick={handleClick} className="navbar_element" href="#ubicanos">UBICANOS</a></li>
            </ul>
        </div>
        </Fragment>
    )
    }

export default Header
