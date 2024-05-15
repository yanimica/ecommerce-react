import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { ItemCount } from "./ItemCount";
import { useCart } from "../contexts/CartContext";
import { doc, getFirestore, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();
  const { addItem } = useCart();

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const db = getFirestore();
        const refDoc = doc(db, "item collection", id);
        const docSnapshot = await getDoc(refDoc);
        if (docSnapshot.exists()) {
          setProducto({ id: docSnapshot.id, ...docSnapshot.data() });
        } else {
          console.log("No existe el documento del producto");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    if (id) {
      obtenerProducto();
    }
  }, [id]);

  const handleAddToCart = (itemToAdd) => {
    addItem(itemToAdd);
  };

  if (!producto) return <div>Loading...</div>;

  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <Card.Img variant="top" src={producto.imageURL} />
      <Card.Body>
        <Card.Title>{producto.title}</Card.Title>
        <Card.Text>{producto.description}</Card.Text>
        <Card.Footer>${producto.price}</Card.Footer>
        <ItemCount
          stock={producto.stock}
          producto={producto}
          addToCart={handleAddToCart}
        />
      </Card.Body>
    </Card>
  );
};
