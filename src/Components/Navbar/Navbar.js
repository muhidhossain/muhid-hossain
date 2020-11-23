import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faMediumM } from '@fortawesome/free-brands-svg-icons';
import { useScrollTrigger, Slide, AppBar, Toolbar, IconButton, makeStyles, Divider, List, ListItem, Hidden, Drawer, useTheme, Menu, MenuItem } from '@material-ui/core';
import FullHeight from "react-full-height";
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import Logo from '../../images/logo.png';
import './Navbar.css';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    listItemText: {
        fontSize: '18px',
        fontWeight: '900'
    },
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
                    <a target="blank" href="https://github.com/muhidhossain">
                        <IconButton style={{ color: "black", outline: "none" }}>
                            <FontAwesomeIcon icon={faGithub} />
                        </IconButton>
                    </a>
                </MenuItem>
                <MenuItem>
                    <a target="blank" href="https://www.linkedin.com/in/muhidhossain">
                        <IconButton style={{ color: "black", outline: "none" }}>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </IconButton>
                    </a>
                </MenuItem>
                <MenuItem>
                    <a target="blank" href="https://medium.com/@muhidhossain7">
                        <IconButton style={{ color: "black", outline: "none" }}>
                            <FontAwesomeIcon icon={faMediumM} />
                        </IconButton>
                    </a>
                </MenuItem>
            </div>
        </Menu>
    );

    const drawer = (
        <FullHeight className="sectionDrawer">
            <div>
                <Link className="drawerLogoLink" to="/">
                    <IconButton style={{ outline: 'none' }}>
                        <img className="drawerLogo" src={Logo} alt="" />
                    </IconButton>
                </Link>
                <Divider style={{ backgroundColor: "black" }} />
                <List className="drawer-btn">
                    <a style={{ textDecoration: "none", color: "black" }} href="/about">
                        <ListItem button>
                            <p>ABOUT ME</p>
                        </ListItem>
                    </a>
                    <a style={{ textDecoration: "none", color: "black" }} href="/mySkills">
                        <ListItem button>
                            <p>MY SKILLS</p>
                        </ListItem>
                    </a>
                    <a style={{ textDecoration: "none", color: "black" }} href="/loveToDo">
                        <ListItem button>
                            <p>LOVE TO DO</p>
                        </ListItem>
                    </a>
                    <a style={{ textDecoration: "none", color: "black" }} href="/portfolio">
                        <ListItem button>
                            <p>PORTFOLIO</p>
                        </ListItem>
                    </a>
                    <a style={{ textDecoration: "none", color: "black" }} href="/contact">
                        <ListItem button>
                            <p>CONTACT</p>
                        </ListItem>
                    </a>
                </List>
            </div>
        </FullHeight>
    )

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.grow}>
            <div>
                <HideOnScroll {...props}>
                    <AppBar style={{ backgroundColor: "#000f0f", height: "80px", padding: "10px 0px" }}>
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
                            <Link to="/">
                                <IconButton style={{ outline: 'none' }}>
                                    <img className="logo" src={Logo} alt="" />
                                </IconButton>
                            </Link>
                            <div className={classes.grow} />
                            <div className={classes.sectionDesktop}>
                                <a target="blank" href="https://github.com/muhidhossain">
                                    <IconButton style={{ color: 'aqua', outline: 'none' }}>
                                        <FontAwesomeIcon icon={faGithub} />
                                    </IconButton>
                                </a>
                                <a target="blank" href="https://www.linkedin.com/in/muhidhossain">
                                    <IconButton style={{ color: 'aqua', outline: 'none' }}>
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </IconButton>
                                </a>
                                <a target="blank" href="https://medium.com/@muhidhossain7">
                                    <IconButton style={{ color: "aqua", outline: "none" }}>
                                        <FontAwesomeIcon icon={faMediumM} />
                                    </IconButton>
                                </a>
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