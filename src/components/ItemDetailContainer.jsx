import { useParams } from "react-router-dom";
import data from "../productos.json";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { getFirestore, getDocs, collection } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const selectedProduct = data.find((p) => p.id === id);
    setProducto(selectedProduct);
  }, [id]);

  if (!producto) return null;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={producto.img} />
      <Card.Body>
        <Card.Title>{producto.name}</Card.Title>
        <Card.Text>{producto.description}</Card.Text>
        <Card.Footer>${producto.price}</Card.Footer>
        <Link to={`/Item/${producto.id}`}>
          <Button variant="primary">Comprar</Button>{" "}
        </Link>
      </Card.Body>
    </Card>
  );
};
