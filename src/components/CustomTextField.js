/**
 * Created by lara on 3/26/2021.
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    textStyle: {
        color:'#3A3A3C',
    },

});

const CustomTextField = ({ record = {}, source }) => {
    const classes = useStyles();
    return (
        <span className={classes.textStyle}>{record[source]}</span>
    );
};

export default CustomTextField;