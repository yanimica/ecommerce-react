import React from "react";
import { useCart } from "../contexts/CartContext";

export const Cart = () => {
  const { items, removeItem, clear, increaseQuantity, decreaseQuantity } =
    useCart();

  return (
    <div className="pedido">
      <h1>Pedido</h1>
      <table>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => removeItem(item.id)}>Eliminar</button>
              </td>
              <td>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={clear}>Vaciar</button>
      <h3>DATOS</h3>
    </div>
  );
};
