import * as React from 'react'
import Typography from '@mui/material/Typography';
import img1 from './Image/colosseum3.jpg'
import img2 from './Image/colosseum1.jpg'
import img4 from './Image/colosseum2.webp'
import ImageSlider from "./ImageSlider";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
//ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
const slides = [
    {
       url:img1,
    },
    {
      url:img2,
    },
    
    {
      url:img4,
    },
    
 ];
 const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  
  
const Colosseum = () => {
    const nav= useNavigate();
  const handleList = () =>{
    nav('/')
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
            <ListItemButton onClick={handleList}>
              <ListItemText>Home</ListItemText>
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
      <ListItemButton onClick={handleList}>
        <ListItemText>Christ the Redeemer</ListItemText>
     </ListItemButton>
    </ListItem>
    <ListItem >
    <ListItemButton onClick={handleList}>
      <ListItemText>Machu Picchu</ListItemText>
   </ListItemButton>
  </ListItem>
  <ListItem >
  <ListItemButton onClick={handleList}>
    <ListItemText>Chichén Itzá</ListItemText>
 </ListItemButton>
</ListItem>
<ListItem >
<ListItemButton onClick={handleList}>
  <ListItemText>Petra</ListItemText>
</ListItemButton>
</ListItem>
     
      </List>
    </Box>
  );
    return (
        <div>
        <AppBar position="static" sx={{bgcolor:"#7B51E8"}}>
  <Toolbar variant="dense">
  <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleDrawer(true)}> <MenuIcon /></IconButton>
  <Drawer open={open} onClose={toggleDrawer(false)}>
    {DrawerList}
  </Drawer>
    <Typography variant="h6" color="inherit" component="div">
    The Colosseum, Rome
    </Typography>
  </Toolbar>
</AppBar>
<br/>
        <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      <br/>
      <br/>
      <Typography variant="body1" color="text.secondary" textAlign={'center'}>The Colosseum is the great oval amphitheater in the center of Rome where gladiators once fought for their life. The largest amphitheater ever built, it was constructed from sand and stone over eight years, from AD72 to AD80. The colossal structure could hold 80,000 spectators, arranged in a circular ring around the central stage. Dramatic and sometimes horrifying events took place here, not just gladiatorial games, but also Classical plays, animal hunts and executions. Some say water was even pumped into the arena to enact mock sea battles. Partially damaged by earthquakes and stone robbers over the centuries, the Colosseum is still an iconic memento of Roman history, visited by thousands of tourists every year, so it stands to reason it would make the list of today’s seven wonders of the world.</Typography>
             </div>
      );
}

export default Colosseum