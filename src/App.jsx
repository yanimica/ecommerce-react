import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Producto } from "./components/Producto";
import { Catalogo } from "./components/Catalogo";
import { Home } from "./components/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ItemDetailContainer } from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Catalogo />} />
        <Route path="/items" element={<Producto />} />
        <Route path="/category/:id" element={<Catalogo />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={404} />
      </Routes>
    </BrowserRouter>
  );
}

/* import "./App.css";
import Body from "./components/Body";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavBar />
    </>
  );
}
*/
export default App;
