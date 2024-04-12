import productos from "../productos.json";
import { Item } from "./Item";
import CardGroup from "react-bootstrap/CardGroup";

export const ItemList = ({ category }) => {
  return (
    <CardGroup>
      {category.map((p) => (
        <Item key={p.id} producto={p} />
      ))}
    </CardGroup>
  );
};
