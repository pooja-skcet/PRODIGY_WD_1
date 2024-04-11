import * as React from 'react';
import img1 from './Image/colosseum.webp'
import img2 from './Image/great_china_wall.jpeg'
import img3 from './Image/tajmahal.webp'
import img4 from './Image/christ-the-redeemer.webp'
import img5 from './Image/machu-picchu.webp'
import img6 from './Image/chichen-itza.webp'
import img7 from './Image/petra.webp'
import Card from '@mui/material/Card';
import { Button,CardContent} from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
//import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton'; 
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';



export default function Home() {
const nav= useNavigate();
const handleList1 = () =>{
     nav('/Colosseum')
}
const handleList2 = () =>{
  nav('/Chinawall')
}
const handleList3 = () =>{
nav('/Tajmahal')
}
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
    <List>
        <ListItem >
            <ListItemButton onClick={handleList1}>
              <ListItemText>The Colosseum</ListItemText>
           </ListItemButton>
          </ListItem>
          <ListItem >
          <ListItemButton onClick={handleList2}>
            <ListItemText>The Great Wall of China</ListItemText>
         </ListItemButton>
        </ListItem>
        <ListItem >
        <ListItemButton onClick={handleList3}>
          <ListItemText>The Taj Mahal</ListItemText>
       </ListItemButton>
      </ListItem>
      <ListItem >
      <ListItemButton onClick={handleList1}>
        <ListItemText>Christ the Redeemer</ListItemText>
     </ListItemButton>
    </ListItem>
    <ListItem >
    <ListItemButton onClick={handleList1}>
      <ListItemText>Machu Picchu</ListItemText>
   </ListItemButton>
  </ListItem>
  <ListItem >
  <ListItemButton onClick={handleList1}>
    <ListItemText>Chichén Itzá</ListItemText>
 </ListItemButton>
</ListItem>
<ListItem >
<ListItemButton onClick={handleList1}>
  <ListItemText>Petra</ListItemText>
</ListItemButton>
</ListItem>
     
      </List>
      
    </Box>
  );
  

    
  return (
    <div>
    
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{bgcolor:"#7B51E8"}}>
      <Toolbar>
        <IconButton 
        onClick={toggleDrawer(true)}
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
        
       
          <MenuIcon />
          </IconButton>
          <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
        
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          7WONDERS
        </Typography>
       
      </Toolbar>
    </AppBar>
  </Box>
  <br/>
  <div className="e-appbar-separator"></div>
    <Grid container spacing={3}>
    <Grid item xs={4}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img1}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          The Colosseum, Rome
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The Colosseum in Rome, is an ancient amphitheater renowned for its architectural grandeur and historical significance as a venue for gladiatorial contests and public spectacles.
          </Typography>
        </CardContent>
        <Button size="small" color="primary" onClick={handleList1}>
          More about..
        </Button>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item xs={4}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img2}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          The Great Wall of China
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The Great Wall of China is a historic marvel, spanning thousands of miles, built to protect against invasions, and stands as a symbol of ancient Chinese civilization and engineering prowess.
          </Typography>
        </CardContent>
        <Button size="small" color="primary" onClick={handleList2}>
          More about..
        </Button>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item xs={4}>
   
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img3}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          The Taj Mahal, India
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The Taj Mahal is an iconic white marble mausoleum in Agra, India, built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal, known for its exquisite architecture and symbolizing enduring love.
          </Typography>
        </CardContent>
        <Button size="small" color="primary" onClick={handleList3}>
          More about..
        </Button>
      </CardActionArea>
    </Card>
   
    </Grid>
    <Grid item xs={4}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img4}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Christ the Redeemer
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Christ the Redeemer is an iconic colossal statue of Jesus Christ located in Rio de Janeiro, Brazil, symbolizing Christianity's significance and offering panoramic views of the city.
          </Typography>
        </CardContent>
        <Button size="small" color="primary" onClick={handleList3}>
          More about..
        </Button>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item xs={4}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img5}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Machu Picchu
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Machu Picchu is an ancient Incan citadel located high in the Andes Mountains of Peru, renowned for its breathtaking panoramic views and mysterious archaeological significance.
          </Typography>
        </CardContent>
        <Button size="small" color="primary" onClick={handleList3}>
          More about..
        </Button>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item xs={4}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img6}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Chichén Itzá
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Chichén Itzá is a renowned archaeological site in Mexico, famous for its well-preserved Mayan ruins, including the iconic stepped pyramid known as El Castillo.
          </Typography>
        </CardContent>
        <Button size="small" color="primary" onClick={handleList3}>
          More about..
        </Button>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item xs={4} className='last'>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img7}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Petra, Jordan
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Petra is an ancient archaeological site in Jordan, renowned for its breathtaking rock-cut architecture, including the iconic Treasury building, and its significance as a historical and cultural landmark.
          </Typography>
        </CardContent>
        <Button size="small" color="primary" onClick={handleList3}>
          More about..
        </Button>
      </CardActionArea>
    </Card>
    </Grid>
   </Grid>
   
    </div>
  );
}
