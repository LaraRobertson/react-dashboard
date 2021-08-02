/**
 * Created by lara on 7/23/2021.
 */
import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { List, Datagrid, DateInput, BooleanInput, SingleFieldList, ChipField,TextField,ReferenceField, EditButton,TextInput,SimpleForm,Edit,Create,ReferenceInput,SelectInput,SimpleList} from 'react-admin';
import CustomTextField from "./CustomTextField";
import CustomNumberField from "./CustomNumberField";
import CustomLinkField from "./CustomLinkField";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
        fontWeight: 'bold',
        // This is JSS syntax to target a deeper element using css selector, here the svg icon for this button
        '& svg': { color: 'orange' }
    },
    form: {
        backgroundColor: 'white',
        color:"red",
        '& .MuiFormControl-root': {width: "200px"},
        '& input': { backgroundColor: 'red' },


    },
});

const authUserUID = localStorage.getItem('UID');
const authEmail = localStorage.getItem('Email');
console.log("uid:" + authUserUID);

const MyEditButton = props => {
    const classes = useStyles();
    return <EditButton className={classes.button} {...props} />;
};

//after title in <list: filter={{userID: authUserUID}}

export const EndpointList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List {...props} title="Devices Title">

            {isSmall ? (
                <SimpleList
                    primaryText={record => `name: ${record.name}`}
                    secondaryText={record => `status: ${record.status}`}
                    tertiaryText={record => record.IP}
                    linkType="show"
                />

            ) : (
                <Datagrid>
                    <CustomTextField source="id"/>
                    <CustomTextField source="name"/>
                    <CustomNumberField source="status"/>
                    <CustomTextField label="Active" source="active" />
                    <CustomTextField source="IP"/>
                    <CustomTextField source="campus_name"/>
                    <CustomTextField label="Create Date" source="create_date" />
                    <CustomTextField label="Update Date" source="update_date" />
                    <CustomLinkField source="id"/>
                    <MyEditButton />
                </Datagrid>
            )}
        </List>
    );
};
export const PostEditEndpoint = props => (
    <Edit {...props} title="Edit Endpoint">
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source="name"/>
            <SelectInput
                source='status'
                choices={[
                    { id: '1', name: '1' },
                    { id: '2', name: '2' },
                    { id: '3', name: '3' },
                    { id: '4', name: '4' },
                ]}
            />
            <SelectInput
                source='active'
                choices={[
                    { id: 'true', name: 'true' },
                    { id: 'false', name: 'false' },
                ]}
            />
            <TextInput source="IP"/>
        </SimpleForm>
    </Edit>
);