import * as React from 'react';
import Typography from '@mui/material/Typography';
import img1 from './Image/tajmahal.webp'
import img2 from './Image/taj2.jpeg'
import img4 from './Image/taj3.jpeg'
import ImageSlider from "./ImageSlider";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
//ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
export default function Tajmahal() {
    
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
  const nav= useNavigate();
  const handleList = () =>{
    nav('/')
    }
   const handleList2 = () =>{
     nav('/Chinawall')
   }
   const handleList1 = () =>{
   nav('/Colosseum')
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
        <ListItemButton onClick={handleList1}>
          <ListItemText>The Colosseum</ListItemText>
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
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleDrawer(true)}>
      <MenuIcon />
    </IconButton>
    <Drawer open={open} onClose={toggleDrawer(false)}>
    {DrawerList}
  </Drawer>
    <Typography variant="h6" color="inherit" component="div">
    The Taj Mahal, India
    </Typography>
  </Toolbar>
</AppBar>
<br/>
    <div style={containerStyles}>
    <ImageSlider slides={slides} />
  </div>
  <br/>
  <br/>
  <Typography variant="body1" color="text.secondary" textAlign={'center'}>India’s renowned Taj Mahal (Persian for Crown of Palaces) is the stunning white marble mausoleum on the bank of the Yamuna River in the city of Agra, and it has been selected as one of the seven wonders of the world. Mughal emperor, Shah Jahan built the temple as a tomb for his beloved wife Mumtaz Mahal, who died during childbirth in 1631. A marble tomb in the center is surrounded by 42 acres of grounds, where gardens, a mosque, guest house and pool complete the complex. The entire project took over 22 years to complete by 20,000 workers at a cost of 32 million rupees (around US$827 million by today’s standards). But the hard work paid off – today the Taj Mahal is recognized as a UNESCO World Heritage Site, and a vital component of India’s rich Mughal history.</Typography>
         </div>
  );
}
