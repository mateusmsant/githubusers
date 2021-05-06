import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { navbarStyles } from '../styles/navbarStyles';

const Navbar = ({ title, icon }) => {
  const classes = navbarStyles();

  // eslint-disable-next-line
  return (
    <AppBar className="navbar" color="transparent" position="relative">
      <Toolbar className="breakdown">
        <Typography variant="h5" className={classes.title}>
          <Link to="/">Github Search</Link>
        </Typography>
        <div>
          <Link to="/">
            <button>USUÁRIOS</button>
          </Link>
          <Link to="/about">
            <button>SOBRE</button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
