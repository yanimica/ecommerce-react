import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { useEffect, useState } from "react";
import data from "../productos.json";

export const ItemListContainer = () => {
  const [category, setCategory] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setCategory(data.find((p) => p.category === id));
  }, []);

  return <ItemList category={category} />;
};
