import React from 'react';
import './scss/Somos.scss'

const Somos = () => {
	return(
		<div className="Somos_container" id="somos">
			<figure>
				<img className="Somos_img"src="https://www.bolsamania.com/seriesadictos/wp-content/uploads/2011/11/rob-schneider-uk-premiere-bedtime-stories-01-450x634.jpg" alt="auto"/>
			</figure>
			<div className="Somos_details">
				<h2 className="Somos_title">NOSOTROS</h2>
				<p className="Somos_p">En Premium Mr. Gordem Escuela llevamos 3 años brindando un servicio personalizado y de calidad formando a nuestros estudiantes para ser conductores con los más altos estandares cumpliendo en su totalidad con todo lo que la reglamentacion demanda y ...  </p>
			</div>
		</div>
	)
}
export default Somos;