/**
 * Created by lara on 8/2/2021.
 */
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDataProvider, Loading, Error } from 'react-admin';

const DashboardInfo = () => {
    const dataProvider = useDataProvider();
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        dataProvider.getOne('users', { id: 2 })
            .then(({ data }) => {
                setUser(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            })
    }, []);

    if (loading) return <Loading />;
    if (error) return <Error />;
    if (!user) return null;

    return (
        <ul>
            <li>Name: {user.name}</li>
            <li>Email: {user.email}</li>
        </ul>
    )

};
export default DashboardInfo;