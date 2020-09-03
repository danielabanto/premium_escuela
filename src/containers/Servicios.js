import React from 'react';
import './scss/Servicios.scss'

const Servicios = () => {
    return(
        <div className="Servicios_container">
            <h2>Nuestros Servicios</h2>
            <div className="Servicios_container_tarjetas">
                <div className="Servicios_tarjeta">
                    <h3 className>Royal Gordem</h3>
                    <p>Ideal para personas que aprenden desde 0</p>
                    <ul>
                        <li>12 horas Full Práctica</li>
                        <li>Boletin Gordem Vip</li>
                        <li>Manual de manejo</li>
                        <li>Ruta Trujillo - Huanchaco</li>
                        <li>Ruta Victor Larco - Trujillo</li>
                    </ul>
                    <p>Precio<span>S/. 150.00</span></p>
                </div>
                <div className="Servicios_tarjeta">
                    <h3 className>Premium Gordem</h3>
                    <p>Ideal para personas que aprenden desde 0</p>
                    <ul>
                        <li>10 horas Full Práctica</li>
                        <li>Boletin Gordem Vip</li>
                        <li>Manual de manejo</li>
                        <li>Ruta Trujillo - Huanchaco</li>
                        <li>Ruta Victor Larco - Trujillo</li>
                    </ul>
                    <p>Precio<span>S/. 130.00</span></p>
                </div>
                <div className="Servicios_tarjeta">
                    <h3 className>Gordem GO</h3>
                    <p>Ideal para personas que aprenden desde 0</p>
                    <ul>
                        <li>8 horas Full Práctica</li>
                        <li>Boletin Gordem Vip</li>
                        <li>Manual de manejo</li>
                        <li>Ruta Trujillo - Huanchaco</li>
                        <li>Ruta Victor Larco - Trujillo</li>
                    </ul>
                    <p>Precio<span>S/. 100.00</span></p>
                </div>
            </div>     
        </div>
    )
}
export default Servicios;