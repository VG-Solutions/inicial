import React from 'react';
import {Link} from 'react-router-dom';

/* Paginas */
function Topo(){
    return <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light">

    <div className="container">
            
        <a className="navbar-brand" href="#">
          <img src="Images/logos_vg_2.png" alt="" height="38" /> 
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#features">Features</a>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/clientes">Clientes</Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link" to="/sobre">Sobre</Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link" to="/contato">Contato</Link>
            </li>
          </ul>
        </div>    
      
    </div>
  </nav>;
}

export default Topo;
