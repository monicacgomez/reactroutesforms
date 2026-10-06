import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    cajaNumero = React.createRef();

    state = {
        tabla: []
    };

    generarTablaMultiplicar = (event) => {
        event.preventDefault();

        let numero = parseInt(this.cajaNumero.current.value);
        let aux = [];
        
        for (let i = 1; i <= 10; i++) {
            let resultado = numero * i;
            
        aux.push({
            numero: numero,
            multiplicador: i,
            resultado: resultado
        });
    }
    
    this.setState({
        tabla: aux
    });
}

  render() {
    return (<div>
        <h1>Tabla de multiplicar</h1>
        
        <form onSubmit={this.generarTablaMultiplicar}>
            
            <label>
            Introduce un número:
            </label>

            <input type="number" ref={this.cajaNumero}/>

            <button type="submit">
            Generar tabla
            </button>

        </form>
        
        <div>
            {
            this.state.tabla.map((elemento, index) => (
            <p key={index}>
                {elemento.numero} x {elemento.multiplicador} = {elemento.resultado}
                </p>
            ))
            }
        </div>
    </div>)
  }
}