import React, { Component } from 'react';

export default class TablaMultiplicar2 extends Component {
    selectNumero = React.createRef();

    state = {
        tabla: [],
        numeros: []
    };

    generarNumeros = () => {
        let aux = [];

        for (let i = 1; i <= 5; i++) {
            let aleat = parseInt(Math.random() * 50) + 1;
            aux.push(aleat);
        }

        this.setState({
            numeros: aux
        });
    };

    generarTablaMultiplicar = (event) => {
        event.preventDefault();

        let numero = parseInt(this.selectNumero.current.value);
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
    };

    componentDidMount = () => {
        this.generarNumeros();
    }

    render() {
        return (<div>
            <h1>Tabla de multiplicar 2</h1>
            <button onClick={this.generarNumeros}>
                Generar números
            </button>
            <form onSubmit={this.generarTablaMultiplicar}>
                
                <label>
                    Selecciona un número:
                </label>
                
                <select ref={this.selectNumero}>
                    {
                    this.state.numeros.map((num, index) => {
                        return (
                        <option key={index} value={num}>
                            {num}
                            </option>);
                            })
                        }
                </select>
                
                <button type="submit">
                    Generar tabla
                </button>
                
                </form>
                <h2>Tabla de multiplicar</h2>
                <div>
                    {
                    this.state.tabla.map((elemento, index) => (
                    <p key={index}>
                        {elemento.numero} x {elemento.multiplicador} = {elemento.resultado}
                        </p>
                        ))
                        }
                    </div>
            </div>
        );
    }
}