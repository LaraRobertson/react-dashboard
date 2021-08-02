/**
 * Created by lara on 6/5/2021.
 */

import * as React from 'react';
import { useGetList, useAuthenticated, Title } from 'react-admin';
import SMSForm from './SMSForm';

const CustomRouteLayout = () => {
    useAuthenticated();
    const { ids, data, total, loaded } = useGetList(
        'devices',
        { page: 1, perPage: 10 },
        { field: 'published_at', order: 'DESC' }
    );

    return loaded ? (
        <div>
            <Title title="Example Admin" />
            <h1>Devices test</h1>
            <p>
                Found <span className="total">{total}</span> posts !
            </p>
            <ul>
                {ids.map(id => (
                    <li key={id}>{data[id].name}</li>
                ))}
            </ul>
        </div>

    ) : null;
};

export default CustomRouteLayout;