import React from 'react';
import Loader from './../assets/Loader'
import './scss/Ubicanos.scss'

class Ubicanos extends React.Component {
    state = {
        necesario: true
    }
    componentDidMount() {
        const google_maps = document.getElementById('google_maps');
        google_maps.addEventListener('load', ()=> {
            this.setState.necesario = false
        })
    }
    render(){
        console.log(this.state.necesario)
        return(
            <React.Fragment>
                {this.state.necesario && <Loader/>}
                <div className="Iframe_container">
                    <iframe 
                        className='iframe_gmaps'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.7325367208273!2d-79.04644548523156!3d-8.12868968362033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3d2de5ab78ff%3A0x8afc7c3be08e0985!2sPremium%20Escuela%20de%20Conductores!5e0!3m2!1ses-419!2spe!4v1593303267730!5m2!1ses-419!2spe" 
                        frameBorder="0" 
                        allowFullScreen="" 
                        aria-hidden="false" 
                        tabIndex="0"
                        id='google_maps'
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default Ubicanos;