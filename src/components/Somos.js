import React from 'react';
import somos_img from './../img/somos_img.jpg'
import './scss/Somos.scss'

const Somos = () => {
	return(
		<div className="Somos_container" id="somos">
			<figure>
				<img className="Somos_img"src={somos_img} alt="auto"/>
			</figure>
			<div className="Somos_details">
				<h2 className="Somos_title">NOSOTROS</h2>
				<p className="Somos_p">En Premium Escuela llevamos 3 años brindando un servicio personalizado y de calidad formando a nuestros estudiantes para ser conductores con los más altos estandares cumpliendo en su totalidad con todo lo que la reglamentacion demanda y en un ambiente grato.  </p>
			</div>
		</div>
	)
}
export default Somos;