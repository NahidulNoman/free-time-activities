import React from 'react';
import profile from '../../img/108380967.jpg'

const Profile = () => {
    return (
        <div className='bg-white p-3 shadow-lg rounded-3 mt-3'>
             <div className='d-flex justify-content-start align-items-center m-2'>
                
                <img className='w-25 rounded-circle' src={profile} alt="" />
               
                <div className='ms-3 mt-2'>
                    <p className='mb-0 fw-bold'>Syed Noman</p>
                    <p className='fw-semibold'><i className="fa-solid fa-location-dot"></i> Dhaka,Bangladesh</p>
                </div>
            </div>


            <div>
               <p className='fw-semibold opacity-75'>
                Hello, There I’m Noman. I have some basic knowledge about JavaScript , and I’m currently learning React. I have a strong passion for learning implementing new web technologies and standards.
               </p>
            </div>
        </div>
    );
};

export default Profile;