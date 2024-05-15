import React, { useState } from "react";

export const ItemCount = ({ stock, addToCart, producto }) => {
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    if (stock > count) setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAddToCartClick = () => {
    const itemToAdd = { ...producto, quantity: count };
    addToCart(itemToAdd);
    console.log("Producto Agregado:", itemToAdd);
  };

  return (
    <div>
      <button onClick={handleDecrease}>-</button>
      <input value={count} readOnly />
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleAddToCartClick}>Agregar al carrito</button>
    </div>
  );
};
