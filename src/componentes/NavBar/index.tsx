import {
  AppBar, Box,
  Button,
  Container,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material';
import { MouseEvent, useState } from 'react';

// Ícones
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import RestaurantIcon from '@mui/icons-material/Restaurant';

import { Link } from 'react-router-dom';

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Estilo de Hover reutilizável
  const linkStyle = {
    my: 2, 
    /* color: 'white', */ 
    display: 'flex', 
    alignItems: 'center',
    gap: 1,
    mx: 1,
    transition: '0.3s',
    ml: 1,
    backgroundColor: 'white', 
    color: '#ed1c24',
    fontWeight: 'bold',
    borderRadius: 1,
    '&:hover': { backgroundColor: '#f5f5f5', transform: 'scale(1.05)' } 
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#f2745f' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          {/* LOGO */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{ mr: 4, display: { xs: 'none', md: 'flex' }, fontWeight: 900, color: 'inherit', textDecoration: 'none' }}
          >
            iFood DF
          </Typography>

          {/* MOBILE MENU */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" onClick={handleOpenNavMenu} color="inherit"><MenuIcon /></IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/"><HomeIcon sx={{mr:1}}/> Home</MenuItem>
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/restaurantes"><RestaurantIcon sx={{mr:1}}/> Restaurantes</MenuItem>
              <Divider />
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/admin"><AdminPanelSettingsIcon sx={{mr:1}}/> Admin</MenuItem>
            </Menu>
          </Box>

          {/* DESKTOP LINKS */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button component={Link} to="/" sx={linkStyle}>
              <HomeIcon fontSize="small" /> Home
            </Button>
            <Button component={Link} to="/restaurantes" sx={linkStyle}>
              <RestaurantIcon fontSize="small" /> Restaurantes
            </Button>
          </Box>

          {/* REDES SOCIAIS E ADMIN */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            
            {/* Redes Sociais */}
            <Tooltip title="Instagram">
              <IconButton color="inherit" component="a" href="https://instagram.com" target="_blank">
                <InstagramIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="GitHub">
              <IconButton color="inherit" component="a" href="https://github.com" target="_blank">
                <GitHubIcon />
              </IconButton>
            </Tooltip>

            <Divider orientation="vertical" flexItem sx={{ bgcolor: 'rgba(255,255,255,0.3)', mx: 1 }} />

            {/* Botão Admin - Destaque Outlined */}
            <Button 
              variant="outlined" 
              component={Link} 
              to="/admin" 
              color="inherit"
              startIcon={<AdminPanelSettingsIcon />}
              sx={{ 
                ml: 1,
                backgroundColor: 'white', 
                color: '#ed1c24',
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#f5f5f5', transform: 'scale(1.05)' }
              }}
            >
              Admin
            </Button>

            {/* Criar Conta - Botão de Ação Principal */}
            <Button 
              variant="contained" 
              component={Link} 
              to="/cadastro"
              startIcon={<AccountCircleIcon />}
              sx={{ 
                ml: 1,
                backgroundColor: 'white', 
                color: '#ed1c24',
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#f5f5f5', transform: 'scale(1.05)' }
              }}
            >
              Criar Conta
            </Button>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;