/**
 * Created by lara on 3/26/2021.
 */
import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';
import CustomEmailField from "./CustomEmailField";

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <CustomEmailField source="email" />
            <TextField source="address.street" label="Street Address"/>
            <TextField source="phone" sortable="{false}"/>
            <TextField source="website" />
            <TextField source="company.name" label="Company Name"/>
        </Datagrid>
    </List>
);