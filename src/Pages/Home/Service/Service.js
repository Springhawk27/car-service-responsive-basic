import React from 'react';
import { Link } from 'react-router-dom';
import './service.css'

const Service = ({ service }) => {
    // const { name, price, description, img } = props.service
    const { id, name, price, description, img } = service
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p className="px-3">Description: {description}</p>
            <Link to={`/booking/${id}`}>
                <button className="btn btn-warning">Book {name.toLowerCase()}</button>

            </Link>
        </div >
    );
};

export default Service;