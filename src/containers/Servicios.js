import React from 'react';
import './scss/Servicios.scss'

const Servicios = () => {
    return(
        <div className="Servicios_container" id="servicios">
            <h2>Nuestros Paquetes</h2>
            <div className="Servicios_container_tarjetas">
                <div className="Servicios_tarjeta">
                    <h3>Royal Gordem</h3>
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
                    <h3>Premium Gordem</h3>
                    <p>Ideal para personas con algo de experiencia y quieran complementar conocimientos</p>
                    <ul>
                        <li>10 horas Full Práctica</li>
                        <li>Boletin Gordem</li>
                        <li>Manual de manejo</li>
                        <li>Ruta Trujillo - Huanchaco</li>
                        {/* <li>Ruta Victor Larco - Trujillo</li> */}
                    </ul>
                    <p>Precio<span>S/. 130.00</span></p>
                </div>
                <div className="Servicios_tarjeta">
                    <h3>Gordem GO</h3>
                    <p>Ideal para personas que deseen finalizar y afinar detalles</p>
                    <ul>
                        <li>8 horas Full Práctica</li>
                        {/* <li>Boletin Gordem Vip</li> */}
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