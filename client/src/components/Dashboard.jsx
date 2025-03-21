import React from "react";

const Dashboard = () => {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-around",
    padding: "10px",
    backgroundColor: "green",
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div>
      <div style={navbarStyle}>
        <span>Products</span>
        <span>Orders</span>
        <span>Payments</span>
      </div>

      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Welcome to Dashboard</h2>
    </div>
  );
};

export default Dashboard;

