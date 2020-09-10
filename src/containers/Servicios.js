import React from 'react';
import './scss/Servicios.scss'

const Servicios = () => {
    return(
        <div className="Servicios_container" id="servicios">
            <h2>Nuestros Paquetes</h2>
            <div className="Servicios_container_tarjetas">
                <div className="Servicios_tarjeta">
                    <h3>FULL SERVICE</h3>
                    <p>Ideal para personas que aprenden desde 0</p>
                    <ul>
                        <li>12 horas Full Práctica</li>
                        <li>Manual teorico de reglas</li>
                        <li>Circuito adecuado de practicas</li>
                        <li>Ruta Trujillo - Huanchaco</li>
                        <li>Ruta Victor Larco - Trujillo</li>
                    </ul>
                    <p>Precio: <span>S/. 220.00</span></p>
                </div>
                <div className="Servicios_tarjeta">
                    <h3>ROYAL SERVICE</h3>
                    <p>Ideal para personas experiencia basica para complementar conocimientos</p>
                    <ul>
                        <li>10 horas Full Práctica</li>
                        <li>Manual teorico de reglas</li>
                        <li>Circuito adecuado de practicas</li>
                        <li>Ruta Trujillo - Huanchaco</li>
                        {/* <li>Ruta Victor Larco - Trujillo</li> */}
                    </ul>
                    <p>Precio<span>S/. 180.00</span></p>
                </div>
                <div className="Servicios_tarjeta">
                    <h3>GO PREMIUM</h3>
                    <p>Ideal para personas que deseen finalizar y afinar detalles</p>
                    <ul>
                        <li>8 horas Full Práctica</li>
                        {/* <li>Boletin Gordem Vip</li> */}
                        <li>Manual teorico de reglas</li>
                        <li>Ruta Trujillo - Huanchaco</li>
                        <li>Ruta Victor Larco - Trujillo</li>
                    </ul>
                    <p>Precio<span>S/. 150.00</span></p>
                </div>
            </div>     
        </div>
    )
}
export default Servicios;