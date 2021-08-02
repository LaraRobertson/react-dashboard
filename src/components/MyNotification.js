/**
 * Created by lara on 4/15/2021.
 */
import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Notification} from 'react-admin';

// Allow multi-line messages to be displayed
const cssMsg = {
    snackbarContent: {
        whiteSpace: 'pre-wrap'
    }
};

const MyNotification = withStyles(cssMsg)(({classes, ...props}) => (
    <Notification {...props} className={classes.snackbarContent}/>
));

export default MyNotification;