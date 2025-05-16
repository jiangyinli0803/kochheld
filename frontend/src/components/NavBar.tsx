import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import BrunchDiningIcon from '@mui/icons-material/BrunchDining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import CakeIcon from '@mui/icons-material/Cake';
import PublicIcon from '@mui/icons-material/Public';
import LogoKochHeld from '../assets/images/LogoKochHeld.png';



// Design suchfeld
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha('#D7B76F', 0.15),
    border: '1px solid #D7B76F',
    '&:hover': {
        backgroundColor: alpha('#D7B76F', 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

// Lupe
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#D7B76F',
}));

// text in den suchfeld
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#FBFAF7',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

// Logo Container für Bildeinbindung
const LogoContainer = styled('div')(({ theme }) => ({
    width: '150px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing(2),
}));

export default function NavBar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);
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

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const toggleDrawer = (open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setDrawerOpen(open);
    };

    // menu rechte seite - favoriten / über uns / news
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Favoriten</MenuItem>
            <MenuItem onClick={handleMenuClose}>News</MenuItem>
            <MenuItem onClick={handleMenuClose}>Über uns</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
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
            <MenuItem onClick={handleMenuClose}>Favoriten</MenuItem>
            <MenuItem onClick={handleMenuClose}>News</MenuItem>
            <MenuItem onClick={handleMenuClose}>Über uns</MenuItem>
        </Menu>
    );

    const menuList = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <BrunchDiningIcon />
                    </ListItemIcon>
                    <ListItemText primary="Frühstück" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <RestaurantIcon />
                    </ListItemIcon>
                    <ListItemText primary="Mittagessen" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DinnerDiningIcon />
                    </ListItemIcon>
                    <ListItemText primary="Abendessen" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <CakeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Snacks" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <PublicIcon />
                    </ListItemIcon>
                    <ListItemText primary="Weltküche" />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box sx={{ flexGrow: 1, width: '100%' }}>
            <AppBar position="fixed" sx={{ backgroundColor: '#3B4D17', width: '100%', top: 0, left: 0, right: 0 }}>
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
                        <img
                            src={LogoKochHeld}
                            alt="KochHeld Logo"
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain'
                            }}
                        />
                    </LogoContainer>

                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Finde dein Rezept"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
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
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon sx={{ color: '#FBFAF7' }} />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            >
                {menuList}
            </Drawer>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}