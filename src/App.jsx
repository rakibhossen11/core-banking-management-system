import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/Lists/ProductList";
import ProductAdd from "./components/Form/ProductAdd";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/addProduct" element={<ProductAdd />} />
      </Routes>
    </Router>
  );
}

export default App;
