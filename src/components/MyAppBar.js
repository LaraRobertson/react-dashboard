/**
 * Created by lara on 4/15/2021.
 */
import * as React from 'react';
import { AppBar, UserMenu, MenuItemLink } from 'react-admin';
import MyUserMenu from "./MyUserMenu";

const MyAppBar = props => <AppBar {...props} userMenu={<MyUserMenu />} />;

export default MyAppBar;