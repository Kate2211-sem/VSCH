import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Box,
  Container,
  Button,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Tooltip,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Fade,
  Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = ({
  lang = 'RU',
  favoritesCount = 0,
  cartCount = 0,
  userName = 'Войти',
  onToggleLang,
  onToggleTheme,
  onOpenBooking,
}) => {
  const [priceMenuAnchor, setPriceMenuAnchor] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleOpenPriceMenu = (event) => setPriceMenuAnchor(event.currentTarget);
  const handleClosePriceMenu = () => setPriceMenuAnchor(null);
  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  // Общие стили для ссылок навигации
  const navLinkStyle = {
    color: '#333333',
    fontWeight: 500,
    fontSize: '0.95rem',
    textTransform: 'none',
    borderRadius: '12px',
    padding: '6px 16px',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      backgroundColor: 'rgba(255, 105, 135, 0.08)',
      color: '#e91e63',
    },
    '&.active': {
      color: '#e91e63',
      fontWeight: 700,
      backgroundColor: 'rgba(255, 105, 135, 0.12)',
    },
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
        color: '#2d2d2d',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: '72px' }}>
          
          {/* 1. Логотип */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              textDecoration: 'none',
              transition: 'transform 0.2s',
              '&:hover': { transform: 'scale(1.02)' },
            }}
          >
            <img src="img/header/ok-logo.png" alt="OK!" style={{ height: '38px', objectFit: 'contain' }} />
            <img src="img/header/salon-name.png" alt="Парикмахерская" style={{ height: '26px', objectFit: 'contain' }} />
          </Box>

          {/* 2. Навигация (Десктоп) */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 0.5,
              backgroundColor: 'rgba(0, 0, 0, 0.03)',
              padding: '4px 8px',
              borderRadius: '20px',
            }}
          >
            <Button component={NavLink} to="/" end sx={navLinkStyle}>
              Главная
            </Button>

            <Button
              onClick={handleOpenPriceMenu}
              endIcon={<KeyboardArrowDownIcon sx={{ transition: '0.2s', transform: Boolean(priceMenuAnchor) ? 'rotate(180deg)' : 'none' }} />}
              sx={{
                ...navLinkStyle,
                color: Boolean(priceMenuAnchor) ? '#e91e63' : '#333333',
              }}
            >
              Стоимость
            </Button>
            
            <Menu
              anchorEl={priceMenuAnchor}
              open={Boolean(priceMenuAnchor)}
              onClose={handleClosePriceMenu}
              TransitionComponent={Fade}
              PaperProps={{
                elevation: 4,
                sx: {
                  borderRadius: '16px',
                  marginTop: '8px',
                  minWidth: '180px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                },
              }}
            >
              <MenuItem onClick={handleClosePriceMenu} component="a" href="#men-hall" sx={{ borderRadius: '8px', mx: 1, my: 0.5 }}>
                Мужской зал
              </MenuItem>
              <MenuItem onClick={handleClosePriceMenu} component="a" href="#women-hall" sx={{ borderRadius: '8px', mx: 1, my: 0.5 }}>
                Женский зал
              </MenuItem>
              <MenuItem onClick={handleClosePriceMenu} component="a" href="#manicure" sx={{ borderRadius: '8px', mx: 1, my: 0.5 }}>
                Маникюр
              </MenuItem>
              <MenuItem onClick={handleClosePriceMenu} component="a" href="#brow" sx={{ borderRadius: '8px', mx: 1, my: 0.5 }}>
                Brow-сервис
              </MenuItem>
            </Menu>

            <Button component={NavLink} to="/shop" sx={navLinkStyle}>
              Магазин косметики
            </Button>

            <Button component="a" href="#about" sx={navLinkStyle}>
              О нас
            </Button>
            
            <Button component="a" href="#contacts" sx={navLinkStyle}>
              Контакты
            </Button>
          </Box>

          {/* 3. Инструменты и кнопка записи */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            
            {/* Переключатель языка */}
            <Button
              onClick={onOpenBooking}
              sx={{
                minWidth: '40px',
                height: '40px',
                borderRadius: '50%',
                fontWeight: 700,
                color: '#444',
                fontSize: '0.85rem',
                border: '1px solid rgba(0,0,0,0.08)',
                '&:hover': { backgroundColor: '#f5f5f5' },
              }}
            >
              {lang}
            </Button>

            {/* Тема */}
            <Tooltip title="Сменить тему">
              <IconButton
                onClick={onToggleTheme}
                sx={{
                  border: '1px solid rgba(0,0,0,0.08)',
                  p: '8px',
                  '&:hover': { backgroundColor: '#f5f5f5' },
                }}
              >
                <DarkModeOutlinedIcon sx={{ fontSize: '1.2rem', color: '#444' }} />
              </IconButton>
            </Tooltip>

            {/* Избранное */}
            <Tooltip title="Избранное">
              <IconButton
                component={Link}
                to="/favorites"
                sx={{
                  border: '1px solid rgba(0,0,0,0.08)',
                  p: '8px',
                  '&:hover': { backgroundColor: 'rgba(233, 30, 99, 0.08)', color: '#e91e63' },
                }}
              >
                <Badge badgeContent={favoritesCount} color="error" sx={{ '& .MuiBadge-badge': { fontWeight: 'bold' } }}>
                  <FavoriteIcon sx={{ fontSize: '1.2rem' }} />
                </Badge>
              </IconButton>
            </Tooltip>

            {/* Корзина */}
            <Tooltip title="Корзина">
              <IconButton
                component={Link}
                to="/cart"
                sx={{
                  border: '1px solid rgba(0,0,0,0.08)',
                  p: '8px',
                  '&:hover': { backgroundColor: 'rgba(233, 30, 99, 0.08)', color: '#e91e63' },
                }}
              >
                <Badge badgeContent={cartCount} color="secondary" sx={{ '& .MuiBadge-badge': { fontWeight: 'bold' } }}>
                  <ShoppingBagIcon sx={{ fontSize: '1.2rem' }} />
                </Badge>
              </IconButton>
            </Tooltip>

            {/* Градиентная кнопка «Онлайн запись» */}
            <Button
              variant="contained"
              onClick={onOpenBooking}
              sx={{
                display: { xs: 'none', sm: 'inline-flex' },
                background: 'linear-gradient(135deg, #ff4081 0%, #e91e63 100%)',
                color: '#fff',
                fontWeight: 600,
                textTransform: 'none',
                borderRadius: '24px',
                padding: '8px 22px',
                boxShadow: '0 4px 14px rgba(233, 30, 99, 0.35)',
                transition: 'all 0.2s ease-in-out',
                ml: 1,
                '&:hover': {
                  background: 'linear-gradient(135deg, #e91e63 0%, #c2185b 100%)',
                  boxShadow: '0 6px 20px rgba(233, 30, 99, 0.45)',
                  transform: 'translateY(-1px)',
                },
              }}
            >
              Онлайн запись
            </Button>

            {/* Мобильный бургер */}
            <IconButton
              onClick={handleDrawerToggle}
              sx={{ display: { xs: 'flex', md: 'none' }, ml: 1 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

        </Toolbar>
      </Container>

      {/* Мобильная шторка */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{ sx: { width: 280, borderRadius: '20px 0 0 20px', p: 2 } }}
      >
        <Box role="presentation" onClick={handleDrawerToggle}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, px: 2, color: '#e91e63' }}>
            Меню
          </Typography>
          <List>
            <ListItem disablePadding><ListItemButton component={Link} to="/" sx={{ borderRadius: '12px' }}><ListItemText primary="Главная" /></ListItemButton></ListItem>
            <ListItem disablePadding><ListItemButton component={NavLink} to="/shop" sx={{ borderRadius: '12px' }}><ListItemText primary="Магазин косметики" /></ListItemButton></ListItem>
            <ListItem disablePadding><ListItemButton component="a" href="#about" sx={{ borderRadius: '12px' }}><ListItemText primary="О нас" /></ListItemButton></ListItem>
            <ListItem disablePadding><ListItemButton component="a" href="#contacts" sx={{ borderRadius: '12px' }}><ListItemText primary="Контакты" /></ListItemButton></ListItem>
          </List>
          <Button
            fullWidth
            variant="contained"
            onClick={onOpenBooking}
            sx={{
              mt: 2,
              background: 'linear-gradient(135deg, #ff4081 0%, #e91e63 100%)',
              borderRadius: '20px',
              textTransform: 'none',
              py: 1.2,
            }}
          >
            Онлайн запись
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;