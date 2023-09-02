import React from 'react';
import {Routes, Route} from 'react-router-dom';/**/

import Home from './pages/Home';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';
import Clientes from './pages/Clientes';


/* Paginas*/

/*function Routes(){*/
  export default () => {
    return (
      <Routes>
          <Route path="/" exact element={<Home />} > </Route>     
          <Route path="/contato" exact element={<Contato />} ></Route>
          <Route path="/sobre" exact element={<Sobre />} ></Route>
          <Route path="/clientes" exact element={<Clientes />} ></Route>

      </Routes>        
    );  
}

 /*Paginas

function Routes(){
  return (
    <Switch>
        <Route exact path="/" >    
                <Home />
        </Route>
    </Switch>        
  );  
}

export default Routes;*/