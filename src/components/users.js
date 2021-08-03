/**
 * Created by lara on 3/26/2021.
 */
import React from 'react';
import { Edit, SimpleForm, List, Datagrid, TextField, Filter, ReferenceInput, EditButton, SelectInput, TextInput} from 'react-admin';
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
const authUserUID = localStorage.getItem('UID');
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
const MyEditButton = props => {
    const classes = useStyles();
    return <EditButton className={classes.button} {...props} />;
};


export const UserList = props => {
    const classes = useStyles();
    return (
        <List
            classes={classes}
            {...props}
            filters={<UserFilter />}
            perPage={25}
            filter={{uid: authUserUID}}
        >
            <Datagrid rowClick="edit">
                <TextField source="id"/>
                <TextField source="name"/>
                <TextField source="phone"/>
                <CustomEmailField source="email"/>
                <MyEditButton />
            </Datagrid>
        </List>
    )
};
export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name"/>
            <TextInput source="phone"/>
            <TextInput source="email"/>

        </SimpleForm>
    </Edit>
);