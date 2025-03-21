import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();
  
  return (
    <Box sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4">You Logged in as User</Typography>
      <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate("/products")}>View Products</Button>
    </Box>
  );
};

export default UserDashboard;
