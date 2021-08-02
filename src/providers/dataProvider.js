/**
 * Created by lara on 4/16/2021.
 */
//import fakeDataProvider from 'ra-data-fakerest';
//use my own "fakerest" so that can get different data for different resources
import fakeDataProvider from "./my-ra-data-fakerest";
import data from "./data";
import data2 from "./data2";
import data1 from "./data1";


// A function decorating a dataProvider for handling user profiles
// see https://marmelab.com/blog/2020/12/14/react-admin-v3-userprofile.html
// don't think code below is right
const addUserProfileOverrides = (dataProvider,loggingEnabled = true) => ( {
    ...dataProvider,
    getUserProfile() {
        const profile = localStorage.getItem("userProfile");
        if (!profile) {
            return Promise.resolve({ data: {} });
        }
        const data = JSON.parse(profile);
        console.log("getUserProfile", data);
        return Promise.resolve({ data });
    },
    async updateUserProfile({ data }) {
        // Convert a newly uploaded file to b64
        const avatar = await (data.avatar.rawFile instanceof File
            ? convertFileToBase64(data.avatar)
            : data.avatar);

        localStorage.setItem(
            "userProfile",
            JSON.stringify({
                ...data,
                id: "unique_id",
                avatar
            })
        );
        return Promise.resolve({ data });
    }
});

/**
 * Convert a `File` object returned by the upload input into a base 64 string.
 * That's not the most optimized way to store images in production, but it's
 * enough to illustrate the idea of data provider decoration.
 */
const convertFileToBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;

        reader.readAsDataURL(file.rawFile);
    });

export default addUserProfileOverrides (
    fakeDataProvider(data, data2, data1)

);



