import React from 'react';

const Break = ({tenHandler}) => {

    const hours = {
        ten : 10,
        twenty : 20,
        thirty : 30,
        forty : 40
    }

    return (
        <div className='bg-white p-3 shadow-lg rounded-3 mt-3'>
             <div>
                <h5 className='fw-bold'>Add A Break </h5>
                <div className='bg-light d-flex justify-content-evenly align-items-center m-3 p-3 rounded-4'>
                   <button onClick={()=>tenHandler(hours.ten)} className='btn fw-bold'>10</button>
                   <button onClick={()=>tenHandler(hours.twenty)} className='btn fw-bold'>20</button>
                   <button onClick={()=>tenHandler(hours.thirty)} className='btn fw-bold'>30</button>
                   <button onClick={()=>tenHandler(hours.forty)} className='btn fw-bold'>40</button>
                </div>
            </div>
        </div>
    );
};

export default Break;