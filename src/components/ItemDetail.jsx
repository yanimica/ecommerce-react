import React from "react";
import Button from "react-bootstrap/Button";
import { ItemCount } from "./ItemCount";
import { useCart } from "../contexts/CartContext";

export const ItemDetail = ({ producto }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({ ...producto, quantity: 1 });

    Swal.fire({
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <h2>{producto.title}</h2>
      <p>{producto.description}</p>
      <p>Precio: ${producto.price}</p>
      <img src={producto.imageURL} alt={producto.title} />
      <div>Stock: {producto.stock}</div>
      <ItemCount stock={producto.stock} />
      <Button variant="primary" onClick={handleAddToCart}>
        Añadir al carrito
      </Button>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </>
  );
};
