import React from 'react';
import './scss/Somos.scss'
import foto from '../img/Marco_playa.jpg'

const Somos = () => {
	return(
		<div className="Somos_container" id="somos">
			<figure>
				<img className="Somos_img"src={foto} alt="auto"/>
			</figure>
			<div className="Somos_details">
				<h2 className="Somos_title">Nosotros</h2>
				<p className="Somos_p"><b>En Premium Mr. Gordem Escuela llevamos 3 años brindando un servicio personalizado y de calidad</b> formando a nuestros estudiantes para ser conductores con los más altos estandares cumpliendo en su totalidad con todo lo que la reglamentacion demanda y ...  </p>
			</div>
		</div>
	)
}
export default Somos;