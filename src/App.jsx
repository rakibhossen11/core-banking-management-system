import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/Lists/ProductList";
import ProductAdd from "./components/Form/ProductAdd";
import ProductUpdate from "./components/Form/ProductUpdate";

function App() {
  return (
    <Router>
      <Routes>
        {/* route for the prodct list page */}
        <Route path="/" element={<ProductList />} />
        {/* route for the product detail page */}
        <Route path="/product/:uniqId" element={<ProductUpdate />} />
        <Route path="/addProduct" element={<ProductAdd />} />
      </Routes>
    </Router>
  );
}

export default App;
