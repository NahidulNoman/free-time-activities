import React from 'react';
import Break from '../break/Break';
import Profile from '../profile/Profile';

const SideBar = ({sideBar}) => {
    let newTime = 0;

    for(let side of sideBar){
        let yourTime = side.time
        newTime = newTime + yourTime
    }
    return (
        <div>
            <Profile></Profile>
            <Break></Break>

            <div>
                <h5>Manage Free Time </h5>
                <div className='d-flex justify-content-around m-3'>
                    <p>Total Time </p>
                    <p>{newTime}</p>
                </div>
                <div className='d-flex justify-content-around m-3'>
                    <p>Break Time </p>
                    <p>000</p>
                </div>
            </div>
            <button className='btn btn-primary'>Activity Completed</button>
        </div>
    );
};

export default SideBar;