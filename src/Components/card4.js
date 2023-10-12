
import React ,{useState}from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Card4 = () => {
  const [ininame,setname]=useState(0)
    function changeclick(){
      setname(ininame+1)
    } 
    function decrementClick(){
      setname(ininame-1)
    }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.cookwithmanali.com/wp-content/uploads/2017/03/Best-Kadai-Paneer.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Dahi Puri
        </Typography>
        <Typography variant="body2" color="text.secondary">
        SDahi Puri is a popular Indian street food where golgappas (fried small balls made from semolina/flour) are filled with potato, cilantro chutney, tamarind chutney, yogurt and sprinkled with spices.
         It is crunchy yet soft from the inside and is like a flavor explosion in the mouth. 
        It’s hard to stop at one when it comes to Dahi Puri!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
        <Button size="small"></Button>
        <p >{ininame}</p>
        <Button size="small" onClick={changeclick}>❤️</Button> 
        <Button size="small" onClick={decrementClick}>💔</Button> 
      </CardActions>
      
    </Card>
    
  );
}

export default Card4