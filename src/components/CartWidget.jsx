import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import cart from "../assets/cartBlanco.png";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const { items } = useContext(CartContext);

  const total = items.reduce(
    (acumulador, valorActual) => acumulador + valorActual.quantity,
    0
  );

  return (
    <Link>
      <img
        className="img-carrito"
        src={cart}
        alt="img cart"
        style={{ width: "25px" }}
      />
      <span> {total} </span>
    </Link>
  );
};
