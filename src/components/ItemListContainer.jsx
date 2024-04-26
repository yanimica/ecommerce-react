import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { useEffect, useState } from "react";
/* import data from "../productos.json"; */

export const ItemListContainer = () => {
  const [category, setCategory] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        const filteredData = id
          ? data.filter((item) => item.category === id)
          : data;
        setCategory(filteredData);
      }, 2000);
    };

    fetchData();
  }, [id]);

  return category.length > 0 ? (
    <ItemList category={category} />
  ) : (
    <div>Loading...</div>
  );
};
