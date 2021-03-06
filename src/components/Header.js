/**
 * Created by lara on 3/26/2021.
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    h1: {
        zIndex: '100',
        color:'#fff',
        position:"absolute",
        top: "0",
        left: "200px",
        marginTop:"0",
    },
});

const Header = () => {
    const classes = useStyles();
    return (
        <h1 className={classes.h1}>Wahsega Dashboard</h1>
    );
};

export default Header;