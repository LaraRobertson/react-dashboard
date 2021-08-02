/**
 * Created by lara on 4/16/2021.
 */
import firebase from "firebase/app";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyC5rbBe3yb-WJeP_8cNDwn6tRJamRiCBxk",
    authDomain: "react-dashboard-100d8.firebaseapp.com",
    databaseURL: "https://react-dashboard-100d8-default-rtdb.firebaseio.com/",
    projectId: "react-dashboard-100d8",
    storageBucket: "react-dashboard-100d8.appspot.com",
    messagingSenderId: "15009078081"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
console.log("auth: ", auth);
export default {
    login: ({ username, password }) => {
        console.log("check login");
        const request = auth.signInWithEmailAndPassword(username, password);
        console.log("request: ", request);
        return request
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                localStorage.setItem('token', user.refreshToken);
                localStorage.setItem('UID', user.uid);
                localStorage.setItem('Email', user.email);
                Promise.resolve();
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                Promise.reject();
            });
    },
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('UID');
        localStorage.removeItem('Email');
        return Promise.resolve();
    },
    checkError: (errorCode) => {
        if (errorCode) {
            return Promise.reject();
        } else {
            return Promise.resolve();
        }
        // ...
    },
    checkAuth: () => {
        console.log("check auth");
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    },
    getPermissions: () => {
        console.log("check Permissions");
        return Promise.resolve();
    }
};

//export default authProvider;
