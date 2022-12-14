import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons'
import logo from '../../assets/farm.png';
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();  
    return (
    <>
<AppBar position='fixed' className='classes.appBar' color='inherit'>
   <Toolbar>
    <Typography variant="h6" className={classes.title} color="inherit">
        <img src={logo} alt='Kristen Kommerce' height='25px' className={classes.image} />
        The Organic Aisle
    </Typography>
    <div className={classes.grow} />
    <div className={classes.button}>
        <IconButton aria-label="Show cart items" color='inherit' overlap="rectangular">
            <Badge badgeContent={totalItems} color="secondary" overlap="rectangular">
                <ShoppingCart />
            </Badge>
        </IconButton>
    </div>
    </Toolbar>
</AppBar>
    </>
  )
}

export default Navbar;
