import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import vegetables from '../components/vegetables.jpg'; 
import fruits from '../components/fruits.jpg';
export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={vegetables}
        alt="Fresh Veggies"
      />
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Organic Veggies
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Invest in what’s real and clean.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}