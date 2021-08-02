/**
 * Created by lara on 4/15/2021.
 */
import React from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@material-ui/core";
import { MenuItemLink, getResources } from "react-admin";
import DefaultIcon from "@material-ui/icons/ViewList";
import SettingsIcon from "@material-ui/icons/Settings";
import HomeIcon from "@material-ui/icons/Home";
import HelpIcon from "@material-ui/icons/Help";

const MyMenu = ({ onMenuClick, logout }) => {
    const isXSmall = useMediaQuery((theme) => theme.breakpoints.down("xs"));
    const open = useSelector((state) => state.admin.ui.sidebarOpen);
    const resources = useSelector(getResources);
    return (
        <div>
            <MenuItemLink
                to="/home"
                primaryText="Home"
                leftIcon={<HomeIcon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
            />
            {resources.map((resource) => (
                <MenuItemLink
                    key={resource.name}
                    to={`/${resource.name}`}
                    primaryText={
                        (resource.options && resource.options.label) || resource.name
                    }
                    leftIcon={resource.icon ? <resource.icon /> : <DefaultIcon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                />
            ))}
            <MenuItemLink
                to="/custom-route"
                primaryText="Settings"
                leftIcon={<SettingsIcon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
            />
            <MenuItemLink
                to="/help-center"
                primaryText="Help Center"
                leftIcon={<HelpIcon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
            />
            {isXSmall && logout}
        </div>
    );
};

export default MyMenu;