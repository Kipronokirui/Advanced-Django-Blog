import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
      <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
                      >
            <MenuIcon />
          </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link component={NavLink} to='/' color="inherit" underline='none'>
              HomeNews
            </Link>
            </Typography>
            <Link href='/login' color="inherit">
              <Button color="inherit">Login</Button>
            </Link>
            <Link href='/register' color="inherit">
              <Button color="inherit">Register</Button>
            </Link>
            <Link href='/logout' color="inherit">
              <Button color="inherit">Logout</Button>
            </Link>
        </Toolbar>
      </AppBar>
          </Box>
    </div>
  )
}

export default Header