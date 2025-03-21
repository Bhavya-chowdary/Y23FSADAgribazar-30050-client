import React, { useState } from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, Card, CardContent, Typography } from "@mui/material";
import ordersData from "./orders.json"; // Ensure orders.json is in the same folder

const OrdersTable = () => {
  const [searchId, setSearchId] = useState("");
  const [filteredOrder, setFilteredOrder] = useState(null);

  const handleSearch = () => {
    const foundOrder = ordersData.find(
      (order) => order.OrderID.toString() === searchId || order.CustomerID.toString() === searchId
    );
    setFilteredOrder(foundOrder);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: 2, textAlign: "center" }}>
        Orders List
      </Typography>

      {/* Search Form */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, marginBottom: 3 }}>
        <TextField
          label="Enter Order ID or Customer ID"
          variant="outlined"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search Order
        </Button>
      </Box>

      {/* Display Found Order */}
      {filteredOrder && (
        <Card sx={{ maxWidth: 400, margin: "auto", marginBottom: 3 }}>
          <CardContent>
            <Typography variant="h6">Order Details</Typography>
            <Typography><strong>Order ID:</strong> {filteredOrder.OrderID}</Typography>
            <Typography><strong>Customer ID:</strong> {filteredOrder.CustomerID}</Typography>
            <Typography><strong>Product ID:</strong> {filteredOrder.ProductID}</Typography>
            <Typography><strong>Quantity:</strong> {filteredOrder.QtyOrdered}</Typography>
            <Typography><strong>Price:</strong> {filteredOrder.PriceEach}</Typography>
            <Typography><strong>Payment Date:</strong> {filteredOrder.PaymentDate}</Typography>
          </CardContent>
        </Card>
      )}

      {/* Orders Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Order ID</strong></TableCell>
              <TableCell><strong>Customer ID</strong></TableCell>
              <TableCell><strong>Product ID</strong></TableCell>
              <TableCell><strong>Qty Ordered</strong></TableCell>
              <TableCell><strong>Price Each</strong></TableCell>
              <TableCell><strong>Payment Date</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ordersData.map((order) => (
              <TableRow key={order.OrderID}>
                <TableCell>{order.OrderID}</TableCell>
                <TableCell>{order.CustomerID}</TableCell>
                <TableCell>{order.ProductID}</TableCell>
                <TableCell>{order.QtyOrdered}</TableCell>
                <TableCell>{order.PriceEach}</TableCell>
                <TableCell>{order.PaymentDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OrdersTable; // Ensure this is exported correctly
