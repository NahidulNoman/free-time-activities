import React from 'react';
import Break from '../break/Break';
import Profile from '../profile/Profile';

const SideBar = ({sideBar}) => {
    let newTime = 0;
    for(let side of sideBar){
        let yourTime = side.time
        newTime = newTime + yourTime
    };



    return (
        <div>
            <Profile></Profile>
            <Break></Break>

            <div className='bg-white p-3 shadow-lg rounded-3 mt-3'>
                <h5 className='fw-bold m-2'>Manage Free Time </h5>
                <div className='d-flex justify-content-between align-items-center bg-light m-3 p-3 rounded-4'>
                    <h6 className='fw-bold'>Total Time </h6>
                    <p className='opacity-75'>{newTime} Hours</p>
                </div>
                <div className='d-flex justify-content-between align-items-center bg-light m-3 p-3 rounded-4'>
                    <h6 className='fw-bold'>Break Time </h6>
                    <p className='opacity-75'>000</p>
                </div>
            <button className='btn btn-primary w-100'>Activity Completed</button>
            </div>
        </div>
    );
};

export default SideBar;