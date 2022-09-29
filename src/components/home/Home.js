import React, { useEffect, useState } from 'react';
import ShowActive from '../showActive/ShowActive';
import SideBar from '../sideBar/SideBar';
import './Home.css';

const Home = () => {
    const [activities , setActivities] = useState([]);
    const [sideBar , setSideBar] = useState([]);

    useEffect( () => {
        fetch('free-time.json')
        .then(rest => rest.json())
        .then(data => setActivities(data))
    },[]);

    const addTime = (active) => {
        let getTime = [...sideBar, active]
        setSideBar(getTime)
    }

    return (
        <div className='row container-fluid'>
            <div className=' col-9'>
            <h4 className='m-5'><i className="fa-solid fa-timeline me-2"></i>  MY FREE TIME</h4>
            <p className='mt-5'>You can see my free time activities.</p>
                <div className='header'>
                {
                    activities.map(active => <ShowActive
                    key={active.id}
                    active={active}
                    addTime={addTime}
                    ></ShowActive>)
                }
                </div>
            </div>
            <div className='col-3'>
                    <SideBar
                    sideBar={sideBar}
                    ></SideBar>
            </div>
        </div>
    );
};

export default Home;