import React from 'react';

const Producto = ({ producto, agregarAlCarrito }) => (
    <div>
        <h3>{producto.nombre}</h3>
        <p>Precio: ${producto.precio}</p>
        <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
    </div>
);

export default Producto;
