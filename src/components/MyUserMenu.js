import React from "react";
import { UserMenu, MenuItemLink } from "react-admin";
import SettingsIcon from "@material-ui/icons/Settings";
import { useProfile } from "./profile";

const MyUserMenu = (props) => {
    const { profileVersion } = useProfile();
    const ConfigurationMenu = React.forwardRef(({ onClick }, ref) => (

            <MenuItemLink
                ref={ref}
                to="/custom-layout"
                primaryText="Twilio Form"
                leftIcon={<SettingsIcon />}
                onClick={onClick} // close the menu on click
            />

    ));
    const ConfigurationMenu2 = React.forwardRef(({ onClick }, ref) => (

        <MenuItemLink
            ref={ref}
            to="/custom"
            primaryText="Custom2"
            leftIcon={<SettingsIcon />}
            onClick={onClick} // close the menu on click
        />

    ));
    return (
        <UserMenu key={profileVersion} {...props}>
            <ConfigurationMenu />
        </UserMenu>
    );
};

export default MyUserMenu;