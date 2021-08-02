/**
 * Created by lara on 3/26/2021.
 */
import React from 'react';
import { List, Datagrid, TextField, Filter, ReferenceInput, SelectInput, TextInput} from 'react-admin';
import CustomEmailField from "./CustomEmailField";
import { makeStyles } from '@material-ui/core/styles';
import { borders } from '@material-ui/system';
const useStyles = makeStyles({
   form: {
       backgroundColor: 'white',
       color:"red",
       '& .MuiInputBase-root': {borderWidth: "1px",
           borderColor: "yellow !important"},
       '& input': { backgroundColor: 'white' },


    },
   searchInput: {
       color: "green"
    }
});
const UserFilter = props => {
    const classes = useStyles();
    return (
    <Filter {...props} classes={classes}>
        <TextInput label="Search1" source="q" alwaysOn className={classes.searchInput}/>
        <ReferenceInput label="User" source="id" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>

    );
};



export const UserList = props => {
    const classes = useStyles();
    return (
        <List
            classes={classes}
            {...props}
            filters={<UserFilter />}
            perPage={25}
        >
            <Datagrid rowClick="edit">
                <TextField source="id"/>
                <TextField source="name"/>
                <CustomEmailField source="email"/>
            </Datagrid>
        </List>
    )
};