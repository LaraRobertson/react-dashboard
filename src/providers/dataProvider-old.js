/**
 * Created by lara on 4/16/2021.
 */
/*import jsonServerProvider from "ra-data-json-server";*/
import fakeDataProvider from 'ra-data-fakerest';
import { GET_ONE, UPDATE } from "react-admin";
import data from "./data";
import data2 from "./data2";
// A function decorating a dataProvider for handling user profiles

const fakeDataProvider1 = fakeDataProvider(data);
const fakeDataProvider2 = fakeDataProvider(data2);

const addUserProfileOverrides = (dataProvider) => ( {
    ...dataProvider,
    getOne: (resource, params) => handle2('getOne', resource, params),

    getOne: (resource, params) => {
        if (resource === 'profile') {
            console.log("hello!!");
            return fakeDataProvider2.getOne(resource, params);Promise.resolve();
        }
        return fakeDataProvider1.getone(resource, params);Promise.resolve();
    }
});



export default addUserProfileOverrides(
    fakeDataProvider(data)
);



