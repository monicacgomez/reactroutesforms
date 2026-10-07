import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class EmpleadosOficios extends Component {
    urlEmpleados = Global.urlApiEmpleados;
    selectOficio = React.createRef();
    state = {
        empleados: [],
        oficios: []
    }

    loadOficios = () => {
        let request = "api/empleados";
        axios.get(this.urlEmpleados + request).then((response) => {
            console.log("Leyendo oficios");
            //PODEMOS CREAR UN OBJ SET QUE ES UNA COLECCIÓN QUE NO ADMITE REPETIDOS EN SU INTERIOR (eliminar repetidos)
            let aux = [... new Set (response.data.map(elem => elem.oficio))];
            this.setState({
                oficios: aux
            })
        })
    }

    buscarEmpleados = (event) => {
        event.preventDefault();
        let oficio = this.selectOficio.current.value;
        let request = "api/empleados/empleadosoficio" + oficio;
        axios.get(this.urlEmpleados + request).then((response) => {
            console.log("Buscando empleados");
            this.setState({
                empleados: response.data
            })

        })
    }

    componentDidMount = () => {
        this.loadOficios();
    }
    render() {
        return (
            <div>
                <h1>Api Empleados Oficios</h1>
                <form onSubmit={this.buscarEmpleados}>
                    <label>
                        Seleccione un oficio:
                    </label>
                    <select ref={this.selectOficio}>
                        {this.state.oficios.map((oficio, index) => {
                            return (<option key={index} value={oficio}> {oficio} </option>)
                        })
                    }

                    </select>
                    <button type="submit">
                        Buscar empleados
                    </button>
                </form>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Apellido</th>
                            <th>Oficio</th>
                            <th>Salario</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.empleados.map((emp, index) => {
                            return (<tr key={index}>
                                <td>{emp.apellido}</td>
                                <td>{emp.oficio}</td>
                                <td>{emp.salario} </td>
                                </tr>)

                            })
                        }
                    </tbody>
                    </table>
            </div>)
            }
        }