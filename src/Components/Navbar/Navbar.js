import React, { useState } from 'react';
import './Navbar.css'
import { useScrollTrigger, Slide, AppBar, Toolbar, IconButton, makeStyles, Divider, List, ListItem, ListItemIcon, ListItemText, Hidden, Drawer, useTheme, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MoreIcon from '@material-ui/icons/MoreVert';
import Logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
}));

const HideOnScroll = (props) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    )
}

const Navbar = (props) => {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    }

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    }

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
            <div style={{ backgroundColor: "aqua", margin: "-8px 0px", }}>
                <MenuItem>
                    <IconButton color="inherit">
                        <FontAwesomeIcon icon={faGithub} />
                    </IconButton>
                </MenuItem>
                <MenuItem>
                    <IconButton color="inherit">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </IconButton>
                </MenuItem>
            </div>
        </Menu>
    );

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {['GitHub', 'Started', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    )

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.grow}>
            <div>
                <HideOnScroll {...props}>
                    <AppBar style={{ backgroundColor: "black", height: "80px", padding: "10px 0px" }}>
                        <Toolbar>
                            <IconButton
                                style={{ outline: "none", color: "aqua" }}
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerToggle}
                            >
                                <MenuIcon style={{ fontSize: "35px" }} />
                            </IconButton>
                            <img className="logo" src={Logo} alt="" />
                            <div className={classes.grow} />
                            <div className={classes.sectionDesktop}>
                                <a style={{ textDecoration: 'none' }} href="https://github.com/muhidhossain">
                                    <IconButton style={{ color: 'aqua', outline: 'none' }}>
                                        <FontAwesomeIcon icon={faGithub} />
                                    </IconButton>
                                </a>
                                <IconButton style={{ color: 'aqua', outline: 'none' }}>
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </IconButton>
                            </div>
                            <div className={classes.sectionMobile}>
                                <IconButton
                                    style={{ color: "aqua", outline: "none" }}
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                    color="inherit"
                                >
                                    <MoreIcon style={{ fontSize: "30px" }} />
                                </IconButton>
                            </div>
                        </Toolbar>
                    </AppBar>
                </HideOnScroll>
                {renderMobileMenu}
            </div>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <div>
                        <Drawer
                            container={container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{ paper: classes.drawPaper }}
                            ModalProps={{ keepMounted: true }}
                        >
                            {drawer}
                        </Drawer>
                    </div>
                </Hidden>
            </nav>
        </div>
    );
};

export default Navbar;