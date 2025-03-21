import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Authentication from "./components/Authentication";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import OrdersTable from "./components/OrdersTable";
import  Feedback  from "./components/Feedback";

import { Login } from "@mui/icons-material"; 

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Authentication setUser={setUser} />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<OrdersTable />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/admin" element={user === "admin" ? <AdminDashboard /> : <Login />} />
        <Route path="/user" element={user === "user" ? <UserDashboard /> : <Login />} />
      </Routes>
    </Router>
  );
};

export default App;
