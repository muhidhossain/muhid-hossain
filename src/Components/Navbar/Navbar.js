import React, { useState } from 'react';
import {
  useScrollTrigger,
  Slide,
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
} from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import Logo from '../../images/logo.png';
import styles from './Navbar.module.scss';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  listItemText: {
    fontSize: '18px',
    fontWeight: '900',
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
  );
};

const Navbar = (props) => {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

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
      <div style={{ backgroundColor: 'aqua', margin: '-8px 0px' }}>
        <MenuItem>
          <a style={{ textDecoration: 'none' }} href="#aboutMe">
            <IconButton
              style={{
                color: 'black',
                outline: 'none',
                fontWeight: '600',
                fontSize: '18px',
              }}
            >
              ABOUT ME
            </IconButton>
          </a>
        </MenuItem>
        <MenuItem>
          <a style={{ textDecoration: 'none' }} href="#mySkills">
            <IconButton
              style={{
                color: 'black',
                outline: 'none',
                fontWeight: '600',
                fontSize: '18px',
              }}
            >
              MY SKILLS
            </IconButton>
          </a>
        </MenuItem>
        <MenuItem>
          <a style={{ textDecoration: 'none' }} href="#projects">
            <IconButton
              style={{
                color: 'black',
                outline: 'none',
                fontWeight: '600',
                fontSize: '18px',
              }}
            >
              PROJECTS
            </IconButton>
          </a>
        </MenuItem>
        <MenuItem>
          <a style={{ textDecoration: 'none' }} href="#loveToDo">
            <IconButton
              style={{
                color: 'black',
                outline: 'none',
                fontWeight: '600',
                fontSize: '18px',
              }}
            >
              LOVE TO DO
            </IconButton>
          </a>
        </MenuItem>
        <MenuItem>
          <a style={{ textDecoration: 'none' }} href="#contact">
            <IconButton
              style={{
                color: 'black',
                outline: 'none',
                fontWeight: '600',
                fontSize: '18px',
              }}
            >
              CONTACT
            </IconButton>
          </a>
        </MenuItem>
      </div>
    </Menu>
  );

  return (
    <div className={classes.grow} id="intro">
      <div>
        <HideOnScroll {...props}>
          <AppBar
            style={{
              backgroundColor: '#000f0f',
              height: '80px',
              padding: '10px 0px',
            }}
          >
            <Toolbar>
              <a href="#intro">
                <IconButton style={{ outline: 'none' }}>
                  <img className={styles.navbar__logo} src={Logo} alt="" />
                </IconButton>
              </a>
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <a
                  style={{
                    color: '#ffffffe0',
                    fontWeight: '600',
                    textDecoration: 'none',
                  }}
                  href="#aboutMe"
                >
                  ABOUT ME
                </a>
                <a
                  style={{
                    color: '#ffffffe0',
                    fontWeight: '600',
                    marginLeft: '30px',
                    textDecoration: 'none',
                  }}
                  href="#mySkills"
                >
                  MY SKILLS
                </a>
                <a
                  style={{
                    color: '#ffffffe0',
                    fontWeight: '600',
                    marginLeft: '30px',
                    textDecoration: 'none',
                  }}
                  href="#projects"
                >
                  PROJECTS
                </a>
                <a
                  style={{
                    color: '#ffffffe0',
                    fontWeight: '600',
                    marginLeft: '30px',
                    textDecoration: 'none',
                  }}
                  href="#loveToDo"
                >
                  LOVE TO DO
                </a>
                <a
                  style={{
                    color: '#ffffffe0',
                    fontWeight: '600',
                    marginLeft: '30px',
                    textDecoration: 'none',
                    paddingRight: '12px',
                  }}
                  href="#contact"
                >
                  CONTACT
                </a>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  style={{ color: 'aqua', outline: 'none' }}
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon style={{ fontSize: '30px' }} />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        {renderMobileMenu}
      </div>
    </div>
  );
};

export default Navbar;
