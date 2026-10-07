import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class ComponentServiceSuppliers extends Component {

    state = { 
        suppliers: [], proveedor: null}
        
        cajaID = React.createRef();
        
        findSupplier = (event) => {
            event.preventDefault();
            let request = "Suppliers";
            let id = parseInt(this.cajaID.current.value);
            axios.get(Global.urlNorthwind + request).then((response) => {
                
                // BUSCAMOS DENTRO DEL STATE EL DATO CON ID
                for (let elem of response.data.value) {
                    if (elem.SupplierID === id) {
                        this.setState({ proveedor: elem})
                        break;
                    }
                }
            })
        }
        
        loadSuppliers = () => {
            console.log("Antes del servicio");
            let request = "Suppliers";
            axios.get(Global.urlNorthwind + request).then((response) => {
                console.log("Leyendo servicio");
                this.setState({suppliers: response.data.value})
            })
            console.log("Después del servicio");
        }
        
        componentDidMount = () => {
            this.loadSuppliers();}
            
    render() {
        return (
        <div>
            <h1>Service Api Suppliers</h1>
            <form onSubmit={this.findSupplier}>
                <label>Id Proveedor: </label>
                <input
                type="number"
                ref={this.cajaID}
                />
                
                <button type="submit">
                    Buscar
                </button>
                </form>
                {this.state.proveedor &&
                (<div>
                    <h2>Contact: {this.state.proveedor.ContactName}</h2>
                    <h2>Title: {this.state.proveedor.ContactTitle}</h2>
                    <h2>Dirección: {this.state.proveedor.Address}</h2>
                    
                </div>)
                }
                {
                this.state.suppliers.map((client, index) => {
                    return (
                    <h4 key={index} style={{ color: "purple" }}>
                        Contacto: {client.ContactName},
                        ID: {client.SupplierID}
                    </h4>)
                    })
                    }
                </div>)
                }
            }