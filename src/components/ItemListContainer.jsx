import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { useEffect, useState } from "react";

import { getFirestore, collection, getDocs } from "firebase/firestore";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    let refCollection;

    if (!id) refCollection = collection(db, "items");

    getDocs(refCollection).then((snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
    });
  }, [id]);

  return products.length > 0 ? (
    <ItemList products={products} />
  ) : (
    <div>Loading...</div>
  );
};
