import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class EmpleadosDepartamentos extends Component {
    cajaIdDepartamento = React.createRef();
    urlEmpleados = Global.urlApiEmpleados;
    buscarEmpleados = (event) => {
        event.preventDefault();
        //NO NECESITAMOS QUE SEA UN Nº (parseInt),PORQUE LO VAMOS A CONCATENAR CON UN request/endpoint
        let idDepartamento = this.cajaIdDepartamento.current.value;
        let request = "api/empleados/empleadosdepartamento/" + idDepartamento;
        axios.get(this.urlEmpleados+request). then((response) => {
            console.log("leyendo empleados");
            this.setState({
                empleados: response.data
            })
        })

    }
    state = {
        empleados: []
    }

  render() {
    return (
      <div>
        <h1> Api Empleados Departamentos</h1>
        <form>
            <label> Introduzca id departamento: </label>
            <input type="text" ref={this.cajaIdDepartamento}/>
            <button onClick={this.buscarEmpleados}>
                Buscar empleados
            </button>
        </form>
        <ul>
            {
                this.state.empleados.map((emp, index) => {
                    return (<li key={index}>
                        {emp.apellido}, Oficio: {emp.oficio}
                    </li>)
                })
            }
        </ul>
      </div>
    )
  }
}
