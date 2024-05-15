import React, { useState } from "react";
import { ItemCount } from "./ItemCount";
import { useCart } from "../contexts/CartContext";

export const ItemDetail = ({ producto }) => {
  const { addItem } = useCart();

  const handleAddToCart = (itemToAdd) => {
    addItem(itemToAdd);
    console.log("Producto agregado:", itemToAdd);
  };

  return (
    <>
      <h2>{producto.title}</h2>
      <p>{producto.description}</p>
      <p>Precio: ${producto.price}</p>
      <img src={producto.imageURL} alt={producto.title} />
      <div>Stock: {producto.stock}</div>
      <ItemCount stock={producto.stock} setQuantity={setQuantity} />
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </>
  );
};
