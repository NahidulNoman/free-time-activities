import React from 'react';

const ShowActive = ({active,addTime}) => {
    // console.log(active)
    const {description,img,name,time} = active;
    return (
        <div>
            <div className="card shadow-lg" style={{width:'18rem'}}>
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"> 
                        {description?description.slice(0,80)+'...':'no description here.'} <br />
                        <small>Time Spend : {time} Hours</small>
                    </p>
                    <span onClick={()=>addTime(active)} className="btn btn-primary w-100">Add To List</span>
                </div>
                </div>
        </div>
    );
};

export default ShowActive;