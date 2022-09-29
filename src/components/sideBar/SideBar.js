import React, { useState } from 'react';
import Break from '../break/Break';
import Profile from '../profile/Profile';
import Swal from 'sweetalert2'

const SideBar = ({sideBar}) => {
    let newTime = 0;
    for(let side of sideBar){
        let yourTime = side.time
        newTime = newTime + yourTime
    };
    const handler = () =>{
        Swal.fire(
            'Good job!',
            'You completed your task!',
            'success'
          )
    };
    const [tenHour , setTenHour] = useState([])
    const tenHandler = (hours) => {
        // console.log('clicked',hours)
        // const newHour = [...tenHour , hours]
        setTenHour(hours);
        // addLocal(hours);
    }
    // const addLocal = () => {
    //     const local = localStorage.getItem('break-time')
    //     let stored = {};
    //     if(local){
    //         stored = JSON.parse(local)
            // localStorage.setItem('break-time',stored)
    //     }
    //     else{
    //         localStorage.setItem('break-time',JSON.stringify(stored))
    //     }
    // }
    
    return (
        <div>
            <Profile></Profile>
            <Break
            tenHandler={tenHandler}
            ></Break>

            <div className='bg-white p-3 shadow-lg rounded-3 mt-3'>
                <h5 className='fw-bold m-2'>Manage Free Time </h5>
                <div className='d-flex justify-content-between align-items-center bg-light m-3 p-3 rounded-4'>
                    <h6 className='fw-bold'>Total Time </h6>
                    <p className='opacity-75'>{newTime} hours</p>
                </div>
                <div className='d-flex justify-content-between align-items-center bg-light m-3 p-3 rounded-4'>
                    <h6 className='fw-bold'>Break Time </h6>
                    <p className='opacity-75'>{tenHour} minutes
                    </p>
                </div>
            <button onClick={handler} className='btn btn-primary w-100 fw-semibold'> Activity Completed</button>
            </div>
        </div>
    );
};

export default SideBar;