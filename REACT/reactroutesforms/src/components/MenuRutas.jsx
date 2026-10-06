import {Component} from "react";
import './Menu.css';

export default class MenuRutas extends Component {
    render(){
        return(<div>
            <ul>
                <li>
                    <a href="/">Home |  </a>
                </li>
                <li>
                    <a href="/cine">Cine |  </a>
                </li>
                <li>
                    <a href="/musica">Música |  </a>
                </li>
                <li>
                    <a href="/formsimple">Form simple |  </a>
                </li>
                <li>
                    <a href="/collatz">Conjetura Collatz |  </a>
                </li> 
                <li>
                    <a href="/tablamultiplicar">Tabla de Multiplicar |  </a>
                </li> 
                <li>
                    <a href="/tablamultiplicar2">Tabla de Multiplicar 2 |  </a>
                </li>
                <li>
                    <a href="/seleccionmultiple">Selección Múltiple |  </a>
                </li>
            </ul>
        </div>)
    }
}