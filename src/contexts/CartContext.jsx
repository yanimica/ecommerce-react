import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, { ...item, quantity: 1 }]);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setItems(
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const getTotalQuantity = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        getTotalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
