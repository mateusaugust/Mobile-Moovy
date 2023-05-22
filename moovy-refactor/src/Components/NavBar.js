import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

function NavBar(){

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return(
    <AppBar position="static" sx={{backgroundColor: '#0ACF83',
    height: '4.5rem'
      
    }}>
    <Container maxWidth="xl">
      <Toolbar disableGutters>
      
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
              <MenuItem onClick={() => {navigate("/library")}}>
                <Typography textAlign="center">My Library</Typography>
              </MenuItem>

              <MenuItem onClick={() => {navigate("/search")}}>
                <Typography textAlign="center">Search</Typography>
              </MenuItem>
          </Menu>
        </Box>
  
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 3.5,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'Inter',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Moovy
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
         
            <Button
              onClick={() => {navigate("/library")}}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              My Library
            </Button>

            <Button
              onClick={() => {navigate("/search")}}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Search
            </Button>
         
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
           
          </Menu>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
    
  )
}

export default NavBar