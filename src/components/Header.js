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
    }
    const animationIn = (element) => {
        element.animate([
            {
                left: '0'
            },
        ],{
            duration: 500,
            fill: 'forwards'
        })
    }
    const animationOut = (element) => {
        element.animate([
            {
                left: '-100vw'
            },
        ],{
            duration: 500,
            fill: 'forwards'
        })
    }
    
    const handleClick = (e) =>{
        const navbar_list = document.getElementById('navbar_list')
        navbar_list.classList.toggle('left')
        if (navbar_list.classList.contains('left')){
            animationIn(navbar_list)
        } else {
            animationOut(navbar_list)
        }
    }

    return(
        <Fragment>
        <header>
            <h1>"PREMIUM"</h1>
            <h2>ESCUELA DE CONDUCTORES</h2>
        </header>
        <div className="navbar">
            <img src={menu} onClick={handleClick} className="hamburger_menu" id="menu"/>
            <ul id="navbar_list" className="navbar_list">
                <li><a onClick={handleClick} className="navbar_item" href="#home">HOME</a></li>
                <li><a onClick={handleClick} className="navbar_item" href="#somos">{somos}</a></li>
                <li><a onClick={handleClick} className="navbar_item" href="#servicios">{servicios}</a></li>
                <li><a onClick={handleClick} className="navbar_item" href="#ubicanos">UBICANOS</a></li>
            </ul>
        </div>
        </Fragment>
    )
    }

export default Header
