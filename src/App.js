import React from 'react';
import {BrowserRouter } from 'react-router-dom';

import Topo from './site/Components/topo';
import Banner from './site/Components/banner';
/*import App from './App';*/
/*import Routes from './pages/Home';*/
import Routes from './Routes';
import Footer from './site/Components/footer';

/* Paginas 
function App(){
  return (
    <div>
      <Topo />
      <Banner />
      
      <Footer />
  </div>  
  )
}*/

function App(){
  return <BrowserRouter>
    <Topo />
      <Banner />
      <Routes />
      <Footer />
  </BrowserRouter>;
}

export default App;

