import React, { Component } from 'react';
import Producto from './Producto';

class ListaProductos extends Component {
    state = {
        productos: [
            { id: 1, nombre: 'Producto 1', precio: 100 },
            { id: 2, nombre: 'Producto 2', precio: 200 },
            { id: 3, nombre: 'Producto 3', precio: 300 },
        ],
        carrito: [],
    };

    agregarAlCarrito = (producto) => {
        this.setState({ carrito: [...this.state.carrito, producto] });
    };

    render() {
        return (
            <div>
                <h1>Lista de Productos</h1>
                {this.state.productos.map((producto) => (
                    <Producto
                        key={producto.id}
                        producto={producto}
                        agregarAlCarrito={this.agregarAlCarrito}
                    />
                ))}
                <h2>Carrito:</h2>
                <ul>
                    {this.state.carrito.map((item, index) => (
                        <li key={index}>{item.nombre}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ListaProductos;
