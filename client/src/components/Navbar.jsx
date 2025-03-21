import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, InputBase, Menu, MenuItem, Box } from "@mui/material";
import { Menu as MenuIcon, Search as SearchIcon, Home, ShoppingCart, Person } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#2e7d32" }}>
      <Toolbar>
        {/* Menu Icon */}
        <IconButton edge="start" color="inherit" onClick={handleMenuOpen}>
          <MenuIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose} component={Link} to="/orders">Order Details</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/products">Product Details</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/payments">Payment Details</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/Feedback">Feedback Details</MenuItem>
        </Menu>

        {/* Search Bar */}
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "white", borderRadius: 2, paddingX: 1 }}>
            <SearchIcon sx={{ color: "gray" }} />
            <InputBase placeholder="Search..." sx={{ marginLeft: 1 }} />
          </Box>
        </Box>

        {/* Navbar Icons */}
        <IconButton color="inherit" component={Link} to="/">
          <Home />
        </IconButton>
        <IconButton color="inherit" component={Link} to="/products">
          <ShoppingCart />
        </IconButton>
        <IconButton color="inherit" component={Link} to="/login">
          <Person />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
