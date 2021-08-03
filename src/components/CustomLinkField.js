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

const CustomLinkField = ({ record = {}, source }) => {
    const classes = useStyles();
    const href = "#/custom/" + record[source];
    return (
        <span className={classes.textStyle}><a href={href}>Zones</a></span>
    );
};

export default CustomLinkField;