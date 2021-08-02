/**
 * Created by lara on 4/15/2021.
 */
import * as React from 'react';
import { NumberField, List, Datagrid, TextField, EditButton } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

const useStyles = makeStyles({
    small: { color: 'orange' },
    big: { color: 'red' },
});

const CustomNumberField = props => {
    const classes = useStyles();
    return (
        <NumberField
            className={classnames({
                [classes.small]: props.record[props.source] < 6,
                [classes.big]: props.record[props.source] >= 6,
            })}
            {...props}
        />
    );
};

export default CustomNumberField;