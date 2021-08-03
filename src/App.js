/**
 * Created by lara on 6/5/2021.
 */
import React from 'react';
import {Admin, Resource, ListGuesser, EditGuesser, AppBar, UserMenu, MenuItemLink, Layout} from 'react-admin';
import {UserList, UserEdit} from "./components/users";
import { Route } from "react-router";
import Header from "./components/Header";
import authProvider from "./providers/authProvider";
import dataProvider from "./providers/dataProvider";
import Dashboard from "./components/Dashboard";
import {EndpointList,EndpointEdit} from "./components/endpoints";
import {CampusList,CampusEdit} from "./components/campuses";
import {ZoneList,ZoneEdit,ZoneCreate} from "./components/zones";
import GroupIcon from '@material-ui/icons/Group';
import { createMuiTheme } from '@material-ui/core/styles';
import MyUserMenu from './components/MyUserMenu';
import { ProfileEdit,useProfile,ProfileProvider } from "./components/profile";
import ThemedCustomRouteNoLayout from './components/ThemedCustomRouteNoLayout';
import ThemedCustomRouteNoLayout2 from './components/ThemedCustomRouteNoLayout2';
import updateDatabase from './components/updateDatabase';


const theme = createMuiTheme({
    palette: {
        type: 'light', // Switching the dark mode on is a single property value change.
        secondary: {
            main: "#0C73AE",
        },
    },
    overrides: {
        // name of style sheet
        MuiFormLabel: {
            root: {
                '&$focused': {
                    color: '#4A90E2'
                }
            }
        }
    }
});

const MyAppBar = props => <AppBar {...props} userMenu={<MyUserMenu />} />;

const MyLayout = props => <ProfileProvider><Layout {...props} appBar={MyAppBar} /></ProfileProvider>;

function App() {
    return (
        <Admin
            layout={MyLayout}
            theme={theme}
            dashboard={Dashboard}
            dataProvider={dataProvider}
            authProvider={authProvider}
            customRoutes={[
                <Route
                    exact
                    path="/custom-layout"
                    component={(props) => <ThemedCustomRouteNoLayout {...props} />}
                />,
                <Route
                    exact
                    path="/custom/:id"
                    component={(props) => <ThemedCustomRouteNoLayout2 {...props} />}
                />,
            ]}>
            <Header/>
            <Resource name="zoneendpoint" list={ZoneList}  edit={ZoneEdit} create={ZoneCreate} options={{ label: 'Zones' }}/>
            <Resource name="users" list={UserList}  edit={UserEdit} icon={GroupIcon}/>
            <Resource name="endpoint" options={{ label: 'Endpoints' }} list={EndpointList} edit={EndpointEdit}/>
            <Resource name="campus" list={CampusList}  edit={CampusEdit} />

        </Admin>
    );
}

export default App;
