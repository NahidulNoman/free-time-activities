import React from 'react';
import profile from '../../img/108380967.jpg'

const Profile = () => {
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
        </div>
    );
};

export default Profile;