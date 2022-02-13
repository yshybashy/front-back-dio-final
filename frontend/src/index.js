import React from 'react';
import ReactDOM from 'react-dom';
import PaginaInicial from './componentes/PaginaInicial';
import Context from './context/Context.js';
import "@fortawesome/fontawesome-free/css/all.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Context>
     <PaginaInicial/>
    </Context>
  </React.StrictMode>,
  document.getElementById('root')
);