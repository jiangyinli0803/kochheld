import * as React from 'react';
import { styled} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
// import MoreIcon from '@mui/icons-material/MoreVert';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import BrunchDiningIcon from '@mui/icons-material/BrunchDining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import CakeIcon from '@mui/icons-material/Cake';
import MenuBookIcon from '@mui/icons-material/MenuBook'; // Beispielicon für AI-Rezept
import RecipeIcon from '@mui/icons-material/Receipt';    // Beispielicon für Recipe
import CottageIcon from '@mui/icons-material/Cottage';
import LogoKochHeld from '../assets/images/LogoKochHeld.png';
import {Link, useNavigate} from 'react-router-dom';
import {ListItemButton} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Container from "@mui/material/Container";


// Design suchfeld
const Search = styled('div')({
    position: 'relative',
    borderRadius: 8,
    backgroundColor: '#f3e8c9',
    border: '1px solid #D7B76F',
    padding: '4px',
    width: '100%',
    maxWidth: 500,
    transition: 'background-color 0.2s ease',
    '&:hover': {
        backgroundColor: '#e7d7aa',
    },
});
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#D7B76F',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#222222',
    '& .MuiInputBase-input': {
        paddingLeft: `calc(1em + ${theme.spacing(3)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        minWidth: '200px',
        boxSizing: 'border-box',
        whiteSpace: 'nowrap',
        overflow: 'visible',
    },
}));

const LogoContainer = styled('div')(({ theme }) => ({
    width: '150px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing(2),
}));

type NavBarProps = {
    login: () => void;
    logout: () => void;
    searchText: string;
    onSearchChange: (value: string) =>void;
};


export default function NavBar({login, logout, searchText, onSearchChange}: NavBarProps) {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    // const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    //     setMobileMoreAnchorEl(event.currentTarget);
    // };

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setDrawerOpen(open);
    };


     const menuId = 'primary-search-account-menu';

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >


            <MenuItem onClick={() => { login(); handleMenuClose(); }}>Login</MenuItem>
            <MenuItem onClick={() => { logout(); handleMenuClose(); }}>Logout</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>

            <MenuItem onClick={() => { login(); handleMenuClose(); }}>Login</MenuItem>
            <MenuItem onClick={() => { logout(); handleMenuClose(); }}>Logout</MenuItem>
        </Menu>
    );

    const menuList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <List>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItemButton>
                        <ListItemIcon><CottageIcon /></ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </Link>
                <ListItemButton component={Link} to="/recipes">
                    <ListItemIcon><RecipeIcon /></ListItemIcon>
                    <ListItemText primary="Rezepte" />
                </ListItemButton>
                <ListItemButton component={Link} to="/recipes/breakfast">
                    <ListItemIcon><BrunchDiningIcon /></ListItemIcon>
                    <ListItemText primary="Frühstück" />
                </ListItemButton>
                <ListItemButton component={Link} to="/recipes/lunch">
                    <ListItemIcon><RestaurantIcon /></ListItemIcon>
                    <ListItemText primary="Mittagessen" />
                </ListItemButton>
                <ListItemButton component={Link} to="/recipes/dinner">
                    <ListItemIcon><DinnerDiningIcon /></ListItemIcon>
                    <ListItemText primary="Abendessen" />
                </ListItemButton>
                <ListItemButton component={Link} to="/recipes/snack">
                    <ListItemIcon><CakeIcon /></ListItemIcon>
                    <ListItemText primary="Snacks" />
                </ListItemButton>
                <ListItemButton component={Link} to="/aisearch">
                    <ListItemIcon><MenuBookIcon /></ListItemIcon>
                    <ListItemText primary="AI-Rezept" />
                </ListItemButton>
            </List>
        </Box>
    );

/*-------------------------------Search bar function--------------------------------------------------------------------------------*/
    const navigate = useNavigate();
    const handleEnter = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            navigate(`/search/${encodeURIComponent(searchText)}`);
        }
    };

    return (
        <Box sx={{ flexGrow: 1, width: '100%' }}>
            <AppBar position="fixed" sx={{ backgroundColor: '#3B4D17', width: '100%' }}>

                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon sx={{ color: '#FBFAF7' }} />
                    </IconButton>
                    <LogoContainer>
                        <Link to="/">
                            <img
                                src={LogoKochHeld}
                                alt="KochHeld Logo"
                                style={{ maxWidth: '50%', maxHeight: '50%', objectFit: 'contain', cursor: 'pointer' }}
                            />
                        </Link>
                    </LogoContainer>
                    
{/*----------------------Search Box----------------------------------------------------------------------------------- */}
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Finde dein Rezept..."
                            inputProps={{ 'aria-label': 'search' }}
                            value={searchText}
                            onChange={e => onSearchChange(e.target.value)}
                            onKeyDown={handleEnter}
                        />
                    </Search>

 {/*--------------  --------Search Box----------------------------------------------------------------------------------- */}

                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle sx={{ color: '#FBFAF7' }} />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>

                <Container>
                    <Toolbar sx={{"@media (min-width: 0px)": {px: 0}}}>

                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon sx={{color: '#D7B76F'}} />
                        </IconButton>
                        <LogoContainer>
                            <Link to="/">
                                <img
                                    src={LogoKochHeld}
                                    alt="KochHeld Logo"
                                    style={{ maxWidth: '50%', maxHeight: '50%', objectFit: 'contain', cursor: 'pointer' }}
                                />
                            </Link>
                        </LogoContainer>
                        <Search>
                            <StyledInputBase placeholder="Finde dein Rezept" inputProps={{ 'aria-label': 'search' }} sx={{'& .MuiInputBase-input': {py: '4px', pl: 1, pr: 'calc(1em + 24px)'}}} />
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                        </Search>
                        <Box sx={{ flexGrow: 1 }} />
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle sx={{ color: '#D7B76F' }} />
                            </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                {menuList}

            </Drawer>
            {renderMobileMenu}
            {renderMenu}
      </Box>
    );
}
