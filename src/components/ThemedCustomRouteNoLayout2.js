/**
 * Created by lara on 6/5/2021.
 */
import React from 'react';
import { ThemeProvider } from "@material-ui/core/styles";
import { useMediaQuery } from '@material-ui/core';
import { List, Datagrid, SingleFieldList, ChipField,TextField,ReferenceField, EditButton,TextInput,SimpleForm,Edit,Create,ReferenceInput,SelectInput,SimpleList} from 'react-admin';
import CustomTextField from "./CustomTextField";
import CustomNumberField from "./CustomNumberField";
import { makeStyles } from '@material-ui/core/styles';
import { theme } from "./theme";
import MyLayout from './MyLayout';

const useStyles = makeStyles({
    button: {
        fontWeight: 'bold',
        // This is JSS syntax to target a deeper element using css selector, here the svg icon for this button
        '& svg': { color: 'orange' }
    },
    table: {
        fontWeight: 'bold',
        // This is JSS syntax to target a deeper element using css selector, here the svg icon for this button
        '& .MuiToolbar-regular-308 ': { color: 'orange' }
    },
});


const authUserUID = localStorage.getItem('UID');
const authEmail = localStorage.getItem('Email');
console.log("uid:" + authUserUID);


const MyEditButton = props => {
    const classes = useStyles();
    return <EditButton className={classes.button} {...props} />;
};

const DeviceList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    const classes = useStyles();
    const pageURL = window.location.href;
    const endpointID = pageURL.substr(pageURL.lastIndexOf('/') + 1);
    const endpointTitle = "endpoint " + endpointID + " ";
    return (
        <ThemeProvider theme={theme}>
            <h1>{endpointTitle}</h1>
            <div><span className={classes.button} >Zones  |</span><span>   link 2</span></div>
            <List {...props} className={classes.table}  basePath={props.path} resource="endpoint" title="->" pagination={false} exporter={false} filter={{id: endpointID}}>


                    <SimpleList
                        primaryText={record => `name: ${record.name}`}
                        secondaryText={record => `status: ${record.status}`}
                        tertiaryText={record => `IP: ${record.IP}`}
                    />

            </List>
        <List {...props} title="Zones" basePath={props.path} resource="zoneendpoint" filter={{endpoint_id: endpointID}}>

            {isSmall ? (
                <SimpleList
                    primaryText={record => `device: ${record.label}`}
                    secondaryText={record => `status: ${record.zone_id}`}
                    tertiaryText={record => record.endpoint_id}
                    linkType="show"
                    filter={{endpoint_id: endpointID}}
                />

            ) : (
                <Datagrid rowClick="edit">
                    <CustomTextField source="zone_id"/>
                    <CustomTextField source="label"/>
                </Datagrid>
            )}
        </List>
        </ThemeProvider>
    );
};
export default DeviceList;