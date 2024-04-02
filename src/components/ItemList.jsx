import productos from "../productos.json";
import { Item } from "./Item";
import CardGroup from "react-bootstrap/CardGroup";

export const ItemList = ({ category }) => {
  console.log(category);

  return (
    <CardGroup>
      {productos.map((p) => (
        <Item key={p.id} producto={p} />
      ))}
    </CardGroup>
  );
};
