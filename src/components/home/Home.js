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
        <div className='row container-fluid flex-column-reverse flex-lg-row'>
            <div className='col-lg-9 col-sm-12'>
            <div className='bg-white p-3 shadow-lg rounded-3 mt-3 mb-4'>
                <h4 className='m-5 fw-bold'><i className="fa-solid fa-timeline me-2"></i>  MY FREE TIME ROUTINE</h4>
                <p className='mt-5 ms-5 fw-semibold'>You can see my free time activities below --</p>
            </div>
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
            <div className='col-lg-3 col-sm-12'>
                    <SideBar
                    sideBar={sideBar}
                    ></SideBar>
            </div>
        </div>
    );
};

export default Home;