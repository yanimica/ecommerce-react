import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer";

/* import { getFirestore, getDocs, collection } from "firebase/firestore"; */

/* function App() {
  useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "item collections", "GrtloYX7Fw3usE9kAr8S");

    getDoc(refDoc).then((snapshot) => {
      console.log({ id: snapshot.id, ...snapshot.data() });
    });
  }, []);
 */
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
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
