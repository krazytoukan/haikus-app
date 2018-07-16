import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = (props) => {
    return(
        <nav>
            <Link to="/"> Home </Link>
            <Link to="/create"> New Haiku </Link>
        </nav>
    )
}

export default Navbar