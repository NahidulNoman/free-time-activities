import React from 'react';

const Break = () => {
    
    return (
        <div className='bg-white p-3 shadow-lg rounded-3 mt-3'>
             <div>
                <h5 className='fw-bold'>Add A Break </h5>
                <div className='bg-light d-flex justify-content-evenly align-items-center m-3 p-3 rounded-4'>
                   <button className='btn fw-bold'>10</button>
                   <button className='btn fw-bold'>20</button>
                   <button className='btn fw-bold'>30</button>
                   <button className='btn fw-bold'>40</button>
                </div>
            </div>
        </div>
    );
};

export default Break;