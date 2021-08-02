/**
 * Created by lara on 8/2/2021.
 */
import * as React from 'react';
import { Query, useQuery, Loading, Error } from 'react-admin';

const DashboardInfo2 = () => {
    const authUserUID = localStorage.getItem('UID');
    const { data, loading, error } = useQuery({
        type: 'getList',
        resource: 'users',
        payload: {id: 1 }
    });

    if (loading) return <Loading />;
    if (error) return <Error />;
    if (!data) return null;

    return (
        <ul>
            <li>Name: {data.name}</li>
            <li>Email: {data.email}</li>
        </ul>
    )

};
export default DashboardInfo2;