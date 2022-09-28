import React from 'react';
import profile from '../../img/108380967.jpg'

const SideBar = () => {
    return (
        <div>
            <div className='d-flex justify-content-start align-items-center m-4'>
                
                <img className='w-25 rounded-circle' src={profile} alt="" />
               
                <div className='ms-3 mt-2'>
                    <p className='mb-0'>Syed Noman</p>
                    <p>Dhaka,Bangladesh</p>
                </div>
            </div>


            <div>
                <p>collage : </p>
                <p>portfolio link :</p>
                <p>your resume : </p>
            </div>


            <div>
                <h5>Add A Break </h5>
                <div className='bg-warning d-flex justify-content-evenly align-items-center m-3'>
                    <p>10</p>
                    <p>20</p>
                    <p>30</p>
                    <p>40</p>
                </div>
            </div>

            <div>
                <h5>Manage Free Time </h5>
                <div className='d-flex justify-content-around m-3'>
                    <p>Total Time </p>
                    <p>000</p>
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