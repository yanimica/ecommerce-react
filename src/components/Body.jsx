import React from "react";

export default function Body() {
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
}
