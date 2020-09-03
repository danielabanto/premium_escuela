import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

// import Contacto from './containers/Contacto.js';
import Servicios from './containers/Servicios.js';
import Somos from './containers/Somos.js';
import Ubicanos from './containers/Ubicanos.js';
import Home from './containers/Home.js';
import Menu from './containers/Menu.js';

function App() {
  return (
    <BrowserRouter>
      <div className="container_full">
        <Menu>
        <div className="container_page">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/servicios" component={Servicios} />
            <Route exact path="/somos" component={Somos} />
            <Route exact path="/ubicanos" component={Ubicanos} />
          </Switch>
        </div>
        </Menu>
      </div>
    </BrowserRouter>
  );
}

export default App;
