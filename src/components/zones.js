/**
 * Created by lara on 7/23/2021.
 */
import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { List, Filter,Datagrid, DateInput, BooleanInput, SingleFieldList, ChipField,TextField,ReferenceField, EditButton,TextInput,SimpleForm,Edit,Create,ReferenceInput,SelectInput,SimpleList,ReferenceArrayInput, SelectArrayInput} from 'react-admin';
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
    referenceInput: {
        fontWeight: 'bold',
        '& .MuiSelect-nativeInput': {color: 'orange'}
    },
    form: {
        '& .MuiFormControl-root': {width: "200px"}
    },
});

const authUserUID = localStorage.getItem('UID');
const authEmail = localStorage.getItem('Email');
console.log("uid:" + authUserUID);

const MyEditButton = props => {
    const classes = useStyles();
    return <EditButton className={classes.button} {...props} />;
};

const ZoneFilter = props => {
    const classes = useStyles();
    return (
        <Filter {...props} classes={classes}>
            <TextInput label="Search1" source="q" alwaysOn className={classes.searchInput}/>

            <ReferenceArrayInput source="endpoint_id" alwaysOn reference="endpoint">
                <SelectArrayInput optionText="name" />
            </ReferenceArrayInput>
        </Filter>

    );
};
//after title in <list: filter={{userID: authUserUID}}

export const ZoneList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List {...props} title="Zones"  filters={<ZoneFilter />}>

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
                    <CustomTextField source="zone_id"/>
                    <CustomNumberField source="label"/>
                    <CustomTextField label="Active" source="active" />
                    <CustomTextField source="endpoint_id"/>
                    <CustomTextField label="Create Date" source="create_date" />
                    <CustomTextField label="Update Date" source="update_date" />
                    <MyEditButton />
                </Datagrid>
            )}
        </List>
    );
};
export const PostEditZone = props => (
    <Edit {...props} title="Edit Zone">
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source="label"/>

            <SelectInput
                source='active'
                choices={[
                    { id: 'true', name: 'true' },
                    { id: 'false', name: 'false' },
                ]}
            />

        </SimpleForm>
    </Edit>
);
export const PostCreateZone = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id"/>
            <TextInput source="label"/>
            <SelectInput
                source='active'
                choices={[
                    { id: 'true', name: 'true' },
                    { id: 'false', name: 'false' },
                ]}
            />
        </SimpleForm>
    </Create>
);