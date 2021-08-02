/**
 * Created by lara on 6/5/2021.
 */
import { ThemeProvider } from "@material-ui/core/styles";
import {Admin, Resource, ListGuesser, EditGuesser, AppBar, UserMenu, MenuItemLink, Layout} from 'react-admin';
import { theme } from "./theme";
import CustomRouteNoLayout from "./CustomRouteNoLayout";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    form: {
        backgroundColor: 'white',
        color:"red",
        '& .MuiInputBase-root': {border: "1px solid red",
            borderColor: "yellow !important"},
        '& input': { backgroundColor: 'white' },

    },
    searchInput: {
        color: "green",border:"1px solid #0c73ae",width:"80%"
    }
});
//was above home
const ThemedCustomRouteNoLayout = (props) => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <h1>Twilio Form</h1>
            <p>On my local machine - after I start express server configured with twilio account information ("node server/index.js") - this form successfully sends a message to my phone.  The code was based on this tutorial: https://www.twilio.com/blog/send-an-sms-react-twilio.
                Dependencies in node were  express, twilio, node-env-run, nodemon, npm-run-all, body-parser, & express-pino-logger.  If the express server is running on the cloud app then messages/alerts can be created based on events and sent.  I do not have account information for bandwidth but it looks like the connection and operation would be similar.</p>
            <div className={classes.searchInput}>
                <CustomRouteNoLayout {...props} />
            </div>

        </ThemeProvider>
    );
};

export default ThemedCustomRouteNoLayout;