import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import ClassIcon from '@mui/icons-material/Class';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SchoolIcon from '@mui/icons-material/School';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import DiscountIcon from '@mui/icons-material/Discount';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TableChartIcon from '@mui/icons-material/TableChart';
import './Sidebar.css';

const drawerWidth = 240;

// Styled Main component
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: open ? drawerWidth : 0,
    marginTop: '-80px',  // Keep marginTop consistent
    ...(open && {
        marginLeft: drawerWidth,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

// Styled AppBar component
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

// Styled DrawerHeader component
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(!isMobile);
    }, [isMobile]);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const isActive = (path) => location.pathname === path;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar sx={{ backgroundColor: "transparent", boxShadow: "none" }} position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerOpen}
                        sx={{ ...(open && { display: 'none' }), color: "#000" }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
                        {/* Add any title or content here */}
                    </Typography>
                </Toolbar>
            </AppBar>

            <Main open={open}>
                <DrawerHeader />
            </Main>

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader sx={{ backgroundColor: "#225C8B" }} className='d-flex justify-content-between align-items-center px-4'>
                    <Link className='sayed' to='/'><img className='w-75' src='images/logo-fav-icon.jpg' alt='logo' /></Link>
                    <IconButton sx={{ color: "#fff" }} onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List sx={{
                    backgroundColor: "#225C8B", padding: "10px", height: "100%"
                }}>
                    <ListItem disablePadding className={`item-link ${isActive("/") ? "active" : ""}`} onClick={() => { navigate("/"); if (isMobile) handleDrawerClose(); }}>
                        <ListItemButton sx={{ display: 'flex', alignItems: 'center' }}>
                            <ListItemIcon>
                                <DashboardIcon className='icon-edit' />
                            </ListItemIcon>
                            <span className='span-edit'>dashboard</span>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding className={`item-link ${isActive("/nursery") ? "active" : ""}`} onClick={() => { navigate("/nursery"); if (isMobile) handleDrawerClose(); }}>
                        <ListItemButton sx={{ display: 'flex', alignItems: 'center' }}>
                            <ListItemIcon>
                                <SchoolIcon className='icon-edit' />
                            </ListItemIcon>
                            <span className='span-edit'>add nursery</span>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding className={`item-link ${isActive("/class") ? "active" : ""}`} onClick={() => { navigate("/class"); if (isMobile) handleDrawerClose(); }}>
                        <ListItemButton sx={{ display: 'flex', alignItems: 'center' }}>
                            <ListItemIcon>
                                <ClassIcon className='icon-edit' />
                            </ListItemIcon>
                            <span className='span-edit'>add class</span>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding className={`item-link ${isActive("/student") ? "active" : ""}`} onClick={() => { navigate("/student"); if (isMobile) handleDrawerClose(); }}>
                        <ListItemButton sx={{ display: 'flex', alignItems: 'center' }}>
                            <ListItemIcon>
                                <PeopleOutlineIcon className='icon-edit' />
                            </ListItemIcon>
                            <span className='span-edit'>add Student</span>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding className={`item-link ${isActive("/parent") ? "active" : ""}`} onClick={() => { navigate("/parent"); if (isMobile) handleDrawerClose(); }}>
                        <ListItemButton sx={{ display: 'flex', alignItems: 'center' }}>
                            <ListItemIcon>
                                <PersonAddIcon className='icon-edit' />
                            </ListItemIcon>
                            <span className='span-edit'>add parent</span>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding className={`item-link ${isActive("/teacher") ? "active" : ""}`} onClick={() => { navigate("/teacher"); if (isMobile) handleDrawerClose(); }}>
                        <ListItemButton sx={{ display: 'flex', alignItems: 'center' }}>
                            <ListItemIcon>
                                <AccountCircleIcon className='icon-edit' />
                            </ListItemIcon>
                            <span className='span-edit'>add teacher</span>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding className={`item-link ${isActive("/services") ? "active" : ""}`} onClick={() => { navigate("/services"); if (isMobile) handleDrawerClose(); }}>
                        <ListItemButton sx={{ display: 'flex', alignItems: 'center' }}>
                            <ListItemIcon>
                                <DesignServicesIcon className='icon-edit' />
                            </ListItemIcon>
                            <span className='span-edit'>add Services</span>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding className={`item-link ${isActive("/services-type") ? "active" : ""}`} onClick={() => { navigate("/services-type"); if (isMobile) handleDrawerClose(); }}>
                        <ListItemButton sx={{ display: 'flex', alignItems: 'center' }}>
                            <ListItemIcon>
                                <CategoryIcon className='icon-edit' />
                            </ListItemIcon>
                            <span className='span-edit'>Services Type</span>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding className={`item-link ${isActive("/discount") ? "active" : ""}`} onClick={() => { navigate("/discount"); if (isMobile) handleDrawerClose(); }}>
                        <ListItemButton sx={{ display: 'flex', alignItems: 'center' }}>
                            <ListItemIcon>
                                <DiscountIcon className='icon-edit' />
                            </ListItemIcon>
                            <span className='span-edit'>add Discount</span>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding className={`item-link ${isActive("/reservation") ? "active" : ""}`} onClick={() => { navigate("/reservation"); if (isMobile) handleDrawerClose(); }}>
                        <ListItemButton sx={{ display: 'flex', alignItems: 'center' }}>
                            <ListItemIcon>
                                <TableChartIcon className='icon-edit' />
                            </ListItemIcon>
                            <span className='span-edit'>reservation</span>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding className={`item-link ${isActive("/report") ? "active" : ""}`} onClick={() => { navigate("/report"); if (isMobile) handleDrawerClose(); }}>
                        <ListItemButton sx={{ display: 'flex', alignItems: 'center' }}>
                            <ListItemIcon>
                                <ConfirmationNumberIcon className='icon-edit' />
                            </ListItemIcon>
                            <span className='span-edit'>reports</span>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    );
};

export default Sidebar;
