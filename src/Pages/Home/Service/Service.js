import React from 'react';
import './service.css'

const Service = ({ service }) => {
    // const { name, price, description, img } = props.service
    const { name, price, description, img } = service
    return (
        <div className="service">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p className="px-3">Description: {description}</p>
        </div >
    );
};

export default Service;