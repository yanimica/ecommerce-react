import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

export const Item = ({ producto }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({ ...producto, quantity: 1 });
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={producto.imageURL} />
      <Card.Body>
        <Card.Title>{producto.title}</Card.Title>
        <Card.Text>{producto.description}</Card.Text>
        <Card.Footer>${producto.categoryId}</Card.Footer>
        <Link to={`/Item/${producto.id}`}>
          <Button variant="primary">VER</Button>{" "}
        </Link>
      </Card.Body>
    </Card>
  );
};
