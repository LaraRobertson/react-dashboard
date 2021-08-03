/**
 * Created by lara on 3/26/2021.
 */
import React from 'react';
import { Edit, SimpleForm, List, Datagrid, TextField, Filter,EditButton, ReferenceInput, SelectInput, TextInput} from 'react-admin';
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
const userID= localStorage.getItem('userID');
const UserFilter = props => {
    const classes = useStyles();
    return (
    <Filter {...props} classes={classes}>
        <TextInput label="Search1" source="q" alwaysOn className={classes.searchInput}/>
    </Filter>

    );
};

const MyEditButton = props => {
    const classes = useStyles();
    return <EditButton className={classes.button} {...props} />;
};

export const CampusList = props => {
    const classes = useStyles();
    return (
        <List
            classes={classes}
            {...props}
            filters={<UserFilter />}
            perPage={25}
            filter={{user_id: userID}}
        >
            <Datagrid rowClick="edit">
                <TextField disabled source="id"/>
                <TextField source="name"/>
                <TextField source="location"/>
                <TextField source="phone"/>
                <MyEditButton />
            </Datagrid>
        </List>
    )
};
export const CampusEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name"/>
            <TextInput source="phone"/>
            <TextInput source="location"/>

        </SimpleForm>
    </Edit>
);