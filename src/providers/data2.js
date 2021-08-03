/**
 * Created by lara on 8/2/2021.
 * just fake data to mimic mysql data
 */

export default {
    zoneendpoint: [
        { id: 1, user_id: 1, zone_id: 1, label: "zone 1", endpoint_id: 1, active: true, create_date: "2021-07-29T15:22:40.000Z", update_date: "2021-07-29T15:22:40.000Z"},
        { id: 2, user_id: 1, zone_id: 2, label: "zone 2", endpoint_id: 1, active: true, create_date: "2021-07-29T15:22:40.000Z", update_date: "2021-07-29T15:22:40.000Z"},
        { id: 3, user_id: 1, zone_id: 3, label: "zone 3", endpoint_id: 1, active: true, create_date: "2021-07-29T15:22:40.000Z", update_date: "2021-07-29T15:22:40.000Z"},
        { id: 4, user_id: 1, zone_id: 1, label: "zone 1", endpoint_id: 2, active: true, create_date: "2021-07-29T15:22:40.000Z", update_date: "2021-07-29T15:22:40.000Z"},
        { id: 5, user_id: 1, zone_id: 4, label: "zone 4", endpoint_id: 2, active: true, create_date: "2021-07-29T15:22:40.000Z", update_date: "2021-07-29T15:22:40.000Z"},
        { id: 6, user_id: 2, zone_id: 5, label: "zone 5", endpoint_id: 3, active: true, create_date: "2021-07-29T15:22:40.000Z", update_date: "2021-07-29T15:22:40.000Z"},
        { id: 7, user_id: 2, zone_id: 6, label: "zone 6", endpoint_id: 3, active: true, create_date: "2021-07-29T15:22:40.000Z", update_date: "2021-07-29T15:22:40.000Z"},


    ],
    endpoint: [
        { id: 1, name: "endpoint 1", status: 2, IP: "127.0.0.1", active: 1, campus_name: "Georgia", user_id: 1, create_date: "2021-07-22 12:15:06", update_date: '2021-07-22 12:15:06'},
        { id: 2, name: "endpoint 2", status: 5, IP: "127.0.0.2", active: 1, campus_name: "Georgia", user_id: 1, create_date: "2021-07-22 12:15:06", update_date: '2021-07-22 12:15:06'},
        { id: 3, name: "endpoint 3", status: 1, IP: "127.0.0.3", active: 1, campus_name: "Florida", user_id: 2, create_date: "2021-07-22 12:15:06", update_date: '2021-07-22 12:15:06'},

    ]};