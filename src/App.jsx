import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/Lists/ProductList";
import ProductAdd from "./components/Form/ProductAdd";
import UserForm from "./components/Form/UserForm";
import UserTable from "./components/Tables/UserTable";

function App() {
  return (
    <Router>
      <Routes>
        {/* route for the prodct list page */}
        <Route path="/" element={<ProductList />} />
        <Route path="/buy&sell/:uniqId" element={<BuySellForm />} />
        {/* route for the product detail page */}
        {/* <Route path="/product/:uniqId" element={<ProductUpdate />} /> */}
        <Route path="/addProduct" element={<ProductAdd />} />
        <Route path="/adduser" element={<UserForm />} />
        <Route path="/usertable" element={<UserTable />} />
      </Routes>
    </Router>
  );
}

export default App;
