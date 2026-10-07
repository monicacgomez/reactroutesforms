import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ComponentServiceSuppliers from './components/ComponentServiceSuppliers';
import EmpleadosDepartamentos from './components/EmpleadosDepartamentos';
import EmpleadosDepartamentos2 from './components/EmpleadosDepartamentos2';
import EmpleadosOficios from './components/EmpleadosOficios';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <EmpleadosOficios />
);

reportWebVitals();