import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/notfound/404.jpg'

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '100%' }} src={notfound} alt="" />
            <Link to='/'><button>Home</button></Link>
        </div>
    );
};

export default NotFound;