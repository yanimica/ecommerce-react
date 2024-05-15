import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { ItemList } from "./ItemList";

import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const obtenerProductos = async () => {
      const db = getFirestore();
      let refCollection;

      if (id) {
        refCollection = query(
          collection(db, "item collection"),
          where("categoryID", "==", id)
        );
      } else {
        refCollection = collection(db, "item collection");
      }

      const querySnapshot = await getDocs(refCollection);
      const productos = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productos);
    };

    obtenerProductos();
  }, [id]);

  return (
    <Container className="mt-4">
      <ItemList products={products} />
    </Container>
  );
};
