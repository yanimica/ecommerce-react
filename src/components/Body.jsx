import React from "react";
import data from "../productos.json";

export default function Body() {
  /*   let productos = [];

  const pedirProductos = () => {
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  };

  pedirProductos().then((res) => {
    productos = res;
  });
 */
  /*   return <div>Soy Yani</div>; */
}

const pedirProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
};

pedirProductos().then((data) => {
  return (
    <div>
      {pedirProductos.length > 0 &&
        productos.map((data) => {
          return (
            <div>
              <h1>${data.title}</h1>
              <h2>${data.name}</h2>
              <img>${data.img}</img>
              <p>${data.description}</p>
              <h3>${data.price}</h3>
            </div>
          );
        })}
    </div>
  );
});
