import * as React from 'react'
import Typography from '@mui/material/Typography';
import img1 from './Image/great_china_wall.jpeg'
import img2 from './Image/great_china_wall.jpeg'
import img4 from './Image/great_china_wall.jpeg'
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
  

const Chinawall = () => {
    const nav= useNavigate();
    const handleList = () =>{
      nav('/')
      }
     const handleList2 = () =>{
       nav('/Colosseum')
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
              <ListItemText>The Colosseum</ListItemText>
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
        <Typography variant="body1" color="text.secondary" textAlign={'center'}>The Great Wall of China is a huge barrier that spans thousands of miles along China’s historic northern border. Created over millennia, the wall began its life as a series of smaller walls dating back to the 7th century BCE, built as protective barriers against nomadic raids. In 220 BCE, China’s first Emperor Qin Shi Huang masterminded the unification of all China’s walls into one almighty barrier, strengthening and extending the wall to keep out northern invaders. Today the wall is recognized as one of the seven wonders, which, including all its branches, measures a whopping 13,171 miles.</Typography>
               </div>
        );
}

export default Chinawall