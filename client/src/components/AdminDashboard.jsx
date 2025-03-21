import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4">You Logged in as Admin</Typography>
      <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate("/products")}>
        Manage Products
      </Button>
      <Button variant="contained" sx={{ mt: 2, ml: 2 }} onClick={() => navigate("/customers")}>
        View Customers
      </Button>
    </Box>
  );
};


export default AdminDashboard;
