import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import { Item } from "./Item";

export const ItemList = ({ products }) => {
  return (
    <CardGroup>
      {products.map((p) => (
        <Item key={p.id} producto={p} />
      ))}
    </CardGroup>
  );
};
