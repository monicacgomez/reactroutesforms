import React, { Component } from 'react'

export default class Collatz extends Component {
    cajaNumero = React.createRef();
    generarCollatz = (event) => {
        event.preventDefault();
        //CAPTURAMOS EL Nº DE LA CAJA
        let numero = parseInt(this.cajaNumero.current.value);
        let aux = [];
        while (numero != 1) {
            if (numero %2 == 0){
                // PAR
                numero = numero / 2;
            }else{
                //IMPAR
                numero = numero * 3 + 1;
            }
            //ESTE Nº LO ALMACENAMOS EN EL ARRAY
            aux.push(numero);
        }
        this.setState({
            numeros: aux
        })
    }
    
    state = {
        numeros: []
    }

    render() {
        return (<div>
        <h1>Conjetura Collatz</h1>
        <form onSubmit= {this.generarCollatz}>
            <label> Introduzca un número </label>
            <input type="number" ref={this.cajaNumero}/>
            <button> Mostrar Collatz </button>
        </form>
        <ul>
            {
                this.state.numeros.map((num, index) => {
                    return (<li key={index}>{num}</li>)
                })
            
            }
        </ul>
        </div>)
    }
}