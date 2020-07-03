import React from 'react';

const Ubicanos = () => {
    return(
        <React.Fragment>
            <iframe 
                className='iframe_gmaps'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.7325367208273!2d-79.04644548523156!3d-8.12868968362033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3d2de5ab78ff%3A0x8afc7c3be08e0985!2sPremium%20Escuela%20de%20Conductores!5e0!3m2!1ses-419!2spe!4v1593303267730!5m2!1ses-419!2spe" 
                frameBorder="0" 
                allowFullScreen="" 
                aria-hidden="false" 
                tabIndex="0" 
            />
        </React.Fragment>
    )
}
export default Ubicanos;