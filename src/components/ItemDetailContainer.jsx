import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, "items", id);

    getDoc(refDoc)
      .then((doc) => {
        if (doc.exists()) {
          setProducto({ id: doc.id, ...doc.data() });
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);

  if (!producto) return <div>Loading...</div>;

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
