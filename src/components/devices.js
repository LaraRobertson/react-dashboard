/**
 * Created by lara on 4/9/2021.
 */
import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { List, Datagrid, SingleFieldList, ChipField,TextField,ReferenceField, EditButton,TextInput,SimpleForm,Edit,Create,ReferenceInput,SelectInput,SimpleList} from 'react-admin';
import CustomTextField from "./CustomTextField";
import CustomNumberField from "./CustomNumberField";
import { makeStyles } from '@material-ui/core/styles';
import MyLayout from './MyLayout';

const useStyles = makeStyles({
    button: {
        fontWeight: 'bold',
        // This is JSS syntax to target a deeper element using css selector, here the svg icon for this button
        '& svg': { color: 'orange' }
    },
});


const authUserUID = localStorage.getItem('UID');
const authEmail = localStorage.getItem('Email');
console.log("uid:" + authUserUID);

const MyEditButton = props => {
    const classes = useStyles();
    return <EditButton className={classes.button} {...props} />;
};

export const DeviceList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List {...props} title="Devices Title" filter={{userID: authUserUID}}>

            {isSmall ? (
                <SimpleList
                    primaryText={record => `device: ${record.name}`}
                    secondaryText={record => `status: ${record.status}`}
                    tertiaryText={record => record.userID}
                    linkType="show"
                />

            ) : (
                <Datagrid rowClick="edit">
                    <CustomTextField source="id"/>
                    <CustomTextField source="name"/>
                    <CustomNumberField source="status"/>
                    <CustomTextField source="userID" label="USER ID"/>
                    <MyEditButton />
                </Datagrid>
            )}
        </List>
    );
};
export const PostEditDevice = props => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput source="userID" reference="users"><SelectInput optionText="id"/></ReferenceInput>
            <TextInput source="id"/>
            <TextInput source="name"/>
            <TextInput source="status"/>
        </SimpleForm>
    </Edit>
);