/**
 * Created by lara on 4/7/2021.
 */
import * as React from "react";
import { EditButton, Show } from 'react-admin';
import { Card, CardContent, CardHeader, Button, Fab} from '@material-ui/core';
import NavigationIcon from '@material-ui/icons/Adjust';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Build';
import FavoriteIcon from '@material-ui/icons/EmojiEmotions';
//https://material-ui.com/components/material-icons/
import { useDataProvider, useQuery, Loading, Error } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import Header from "./Header";
import DashboardInfo from "./DashboardInfo";
const useStyles = makeStyles({
    button: {
        fontWeight: 'bold',
        // This is JSS syntax to target a deeper element using css selector, here the svg icon for this button
        '& svg': { color: 'orange' }
    },
    li: {
        color:'red',
    },
});

const authUserUID = localStorage.getItem('UID');

const payload = {
    pagination: { page: 1, perPage: 10 },
    sort: { field: 'name', order: 'ASC' },
    filter:{uid: authUserUID}
};
const payload2 = {
    pagination: { page: 1, perPage: 10 },
    sort: { field: 'name', order: 'ASC' },
    filter:{user_id: 1, status_lte: 4}
};
const UserProfile = () => {
    const { data, total, loading, error } = useQuery({
        type: 'getList',
        resource: 'users',
        payload: payload

    });

    if (loading) return <Loading />;
    if (error) return <Error />;
    if (!data) return null;


    return (
        <div>
            <p>Total users: {total}</p>
            <ul>
           {data.map
           (user => <li key={user.name}>{user.name} | {user.email}</li>)}
            </ul>
            </div>
    )
};
const EndpointStatus = () => {
    const { data, total, loading, error } = useQuery({
        type: 'getList',
        resource: 'endpoint',
        payload: payload2

    });
    const classes = useStyles();

    if (loading) return <Loading />;
    if (error) return <Error />;
    if (!data) return null;
    const userID = data[0].id;
    console.log("userID: " + userID);
    localStorage.setItem('userID',  userID);

    return (
        <div>
            <p>Total Endpoints with status less than 4: {total}</p>
            <ul>
                {data.map
                (endpoint => <li className={classes.li} key={endpoint.name}>name: {endpoint.name} | status: {endpoint.status}</li>)}
            </ul>
        </div>
    )
};
const Dashboard = () => {

    const classes = useStyles();
    return (

        <Card>
            <CardHeader title="Welcome to the Dashboard" />
            <CardContent>
            <DashboardInfo/>

            <EndpointStatus />
            </CardContent>
            <Header/>

        </Card>

    )
};
export default Dashboard;