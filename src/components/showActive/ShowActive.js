import React from 'react';

const ShowActive = ({active}) => {
    console.log(active)
    const {description,img,name,time} = active;
    return (
        <div>
            <div class="card" style={{width:'18rem'}}>
                <img src={img} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text"> 
                        {description?description.slice(0,80)+'...':'no description here.'} <br />
                        <small>Time Spend : {time} Hours</small>
                    </p>
                    <span href="#" class="btn btn-primary">Go somewhere</span>
                </div>
                </div>
        </div>
    );
};

export default ShowActive;