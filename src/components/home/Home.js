import React, { useEffect, useState } from 'react';
import ShowActive from '../showActive/ShowActive';
import './Home.css';

const Home = () => {
    const [activities , setActivities] = useState([]);

    useEffect( () => {
        fetch('free-time.json')
        .then(rest => rest.json())
        .then(data => setActivities(data))
    },[])
    return (
        <div className='row container-fluid'>
            <div className='header col-9'>
                {
                    activities.map(active => <ShowActive
                    key={active.id}
                    active={active}
                    ></ShowActive>)
                }
            </div>
            <div className='col-3'>
                    <h3>side bar</h3>
            </div>
        </div>
    );
};

export default Home;