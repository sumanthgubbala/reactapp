
import React ,{useState}from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Card2 = () => {
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
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Y7DhzKufP06v3v-YG7E9MAHaLH%26pid%3DApi&f=1&ipt=ff2684f6a9c246e39848c60e8eb38b7bf3046207574a08709c994118cc5efbc7&ipo=images"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sambar
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Sambar is a lentil and vegetable stew, most popular in South India.
        Even though I am not south Indian, I have always loved it as far as I can remember. So, I guess it’s safe to say it’s popular all across India.
        Here are the key ingredients required to make a sambar.
        entil (dal): Lentils form the base of sambar. Usually it’s made with toor dal (split pigeon peas lentil) but can also be made by mixing moong and toor dal  or masoor (red lentils) and toor dal.
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

export default Card2