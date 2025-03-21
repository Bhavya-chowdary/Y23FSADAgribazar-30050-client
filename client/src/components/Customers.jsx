import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const customers = [
  { name: 'John Doe', email: 'john@example.com', location: 'New York' },
  { name: 'Jane Smith', email: 'jane@example.com', location: 'California' },
  { name: 'Emily Johnson', email: 'emily@example.com', location: 'Texas' },
  { name: 'Michael Brown', email: 'michael@example.com', location: 'Florida' },
  { name: 'Sarah Wilson', email: 'sarah@example.com', location: 'Nevada' },
  { name: 'Chris Lee', email: 'chris@example.com', location: 'Washington' },
  { name: 'Anna Taylor', email: 'anna@example.com', location: 'Ohio' },
  { name: 'Robert Anderson', email: 'robert@example.com', location: 'Virginia' },
  { name: 'Jessica Martinez', email: 'jessica@example.com', location: 'Arizona' },
  { name: 'David Hernandez', email: 'david@example.com', location: 'Illinois' },
];
const Customers = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: 2,
        backgroundColor: "green",
      }}
    >
      {customers.map((customer, index) => (
        <Card key={index} variant="outlined" sx={{ minWidth: 275, maxWidth: 300, padding: 2 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {customer.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {customer.location}
            </Typography>
            <Typography variant="body2">{customer.email}</Typography>
          </CardContent>
          <Button size="small" onClick={() => alert('Details of ${customer.name}')}>
            Learn More
          </Button>
        </Card>
      ))}
    </Box>
  );
};

export default Customers;