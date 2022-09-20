import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons'
import logo from '../../assets/store.png';
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();  
    return (
    <>
<AppBar position='fixed' className='classes.appBar' color='inherit'>
    <Typography varient="h6" className={classes.title} color="inherit">
        <img src={logo} alt='Kristen Kommerce' height='25px' className={classes.name} />
    </Typography>
    <div className={classes.grow} />
    <div className={classes.button}>
        <IconButton aria-label="Show cart items" color='inherit'>
            <Badge badgeContent={0} color="secondary">
                <ShoppingCart />
            </Badge>
        </IconButton>
    </div>
</AppBar>
    </>
  )
}

export default Navbar;