
import React ,{useState}from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Card3 = () => {
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
        image="https://www.cookwithmanali.com/wp-content/uploads/2018/05/Summer-Lassi-New-Flavors.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lassi
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Seattle s weather is so unpredictable, it drives me nuts. Last week it was in the 80s, so warm that I even thought about getting an air conditioning system installed in our house! And this week, it has just been grey and cold and I basically have my heat on.
        Seriously, I really wish that the weather stops playing hide and seek with us and just gives me ample amount of sunshine!
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

export default Card3