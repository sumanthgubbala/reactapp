import React ,{useState}from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function MediaCard() {
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
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.-9jxMfK2HrFeMA8L0ALdgwHaHa%26pid%3DApi&f=1&ipt=82eb1590ea87944329803155769754baec2e608e36d0141c16cf6fbe0238fc60&ipo=images"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Biryani
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Biryani is my love language. Frying a boatload of onions,
         building just the right balance of spice in the meat or vegetables,
          parboiling the rice so each grain cooks up long and distinct, 
          and then layering everything together. These small acts of care result in the most aromatic, 
          steaming pot of deliciousness that is a joy to gather around.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button><br/>
        <Button size="small"></Button>
        <p >{ininame}</p>
        <Button size="small" onClick={changeclick}>❤️</Button> 
        <Button size="small" onClick={decrementClick}>💔</Button> 
        <Button size='small'></Button>

      </CardActions>
      
    </Card>
  );
}
