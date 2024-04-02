import productos from "../productos.json";
import { Item } from "../components/Item";
import CardGroup from "react-bootstrap/CardGroup";

export const Producto = () => {
  return (
    <CardGroup>
      {productos.map((p) => (
        <Item key={p.id} producto={p} />
      ))}
    </CardGroup>
  );
};
