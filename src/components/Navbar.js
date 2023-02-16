import React from 'react';


import {Typography,Toolbar,AppBar,Button, ThemeProvider,createTheme, Stack} from '@mui/material'

import { Link } from 'react-router-dom';
import { Box, spacing } from '@mui/system';

const themeone=createTheme({
  typography: {
    button: {
    fontWeight:"normal",
    fontSize:'20px',
    spacing:'4px'
    },
  },
})
themeone.spacing(2)


function Navbar() {
  return (
<>

      <AppBar position="absolute" color='transparent' >
        <Toolbar>
        <Typography variant="h4" flexGrow={2} align='left'>AmaBetter</Typography> 
   
          <ThemeProvider theme={themeone}>
          <Button component={Link} cl to="/" color="inherit" >Home</Button>
          <Button component={Link} to="/Createquiz" color="inherit">Create Quiz</Button>
          <Button component={Link} to="/Playquiz" color="inherit">Play Quiz</Button>
        <Button component={Link} to='/myquiz' color='inherit'>My Quiz</Button>
          
          </ThemeProvider>
        </Toolbar>
      </AppBar>

      </>
  )}

export default Navbar;
