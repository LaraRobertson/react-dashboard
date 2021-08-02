/**
 * Created by lara on 6/5/2021.
 * gets data from mysql table on local server
 */

const data2 = {
    endpoint:[],
    zoneendpoint:[]
};
const userID = {};
const campusID = {};
const authUserUID = localStorage.getItem('UID');
let zoneIndex = 0;
let endpointIndex = 0;
console.log("authUserUID: " + authUserUID);

//used loopback to create api for mysql database and created these urls
//http://localhost:4000/users
//http://localhost:4000/users/2/endpoints
//http://localhost:4000/endpoints/2/campuses
//http://localhost:4000/endpoints/1/zones

async function getUsers() {
    let url = 'http://localhost:4000/users?filter[where][UID]=' + authUserUID;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderUserID() {
    let users = await getUsers();

    users.forEach((user,index) => {
        userID[index] = user.user_id;
        console.log("user.user_id: " + userID[index] );
    });
}


async function getZones(endpoint_id) {
    let url = 'http://localhost:4000/endpoints/' + endpoint_id + '/zones';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function getEndpoints() {
    const result = await renderUserID();
    let url = 'http://localhost:4000/users/' + userID[0] + '/endpoints';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function getCampus(endpoint_id) {
    let url = 'http://localhost:4000/endpoints/' + endpoint_id + '/campuses';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderEndpoints() {
    const endpoints = await getEndpoints();
    for (let i = 0; i < endpoints.length; i++) {
        const campuses = await getCampus(endpoints[i].endpoint_id);
        campuses.forEach((campus) => {
            campusID[0] = campus.name;
        });
        const zones = await getZones(endpoints[i].endpoint_id);
        for (let j = 0; j < zones.length; j++) {
            data2.zoneendpoint[j] = {
                id: j+1,
                zone_id: zones[j].zone_id,
                label: zones[j].label,
                endpoint_id: endpoints[i].endpoint_id,
                active:  zones[j].active,
                create_date:  zones[j].create_date,
                update_date:  zones[j].update_date

            };
        }
        data2.endpoint[i] = {
            id: endpoints[i].endpoint_id,
            name:  endpoints[i].name,
            status:  endpoints[i].status,
            IP:  endpoints[i].IP,
            active:  endpoints[i].active,
            create_date:  endpoints[i].create_date,
            update_date:  endpoints[i].update_date,
            campus_name: campusID[0]
        };
    }






}

renderEndpoints();

export default data2;