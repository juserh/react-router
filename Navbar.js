import React from 'react';
import {Link} from 'react-router-dom';

const Navbar=()=>{
    return(
    <div className="Navbar">
        <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/membership">membership</Link></li>
            <li><Link to="/login">login</Link></li>
            <li><Link to="/blog">post</Link></li>
        </ul>
    </div>
    );
};
export default Navbar;