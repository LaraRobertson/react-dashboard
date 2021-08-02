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
import { useState, useEffect } from 'react';
import { useDataProvider, Loading, Error } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import Header from "./Header";
const useStyles = makeStyles({
    button: {
        fontWeight: 'bold',
        // This is JSS syntax to target a deeper element using css selector, here the svg icon for this button
        '& svg': { color: 'orange' }
    },
});

const email = localStorage.getItem('Email');
const authUserUID = localStorage.getItem('UID');
export default () => (

<div color="text.primary">
    <h1>hello {email} </h1>
    <Card>
        <h2>test</h2>
        <div>test again</div>
        <Header/>
        <Button variant="contained" color="primary">
            Hello World
        </Button>
        <CardHeader title="Welcome to the administration" />
        <CardContent>Welcome to the Dashboard.</CardContent>
    </Card>
    <Fab color="primary" aria-label="add">
        <AddIcon />
    </Fab>
    <Fab color="secondary" aria-label="edit">
        <EditIcon />
    </Fab>
    <Fab variant="extended">
        <NavigationIcon/>
        Navigate
    </Fab>
    <Fab disabled aria-label="like">
        <FavoriteIcon />
    </Fab>
</div>

);